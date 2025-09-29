#!/usr/bin/env python3
"""
Simple PDF Generator for Frehab Worksheets
Uses reportlab for reliable PDF generation
"""

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
import re

def create_pdf_from_markdown(md_file, output_file):
    """Create PDF from markdown content"""
    
    # Read markdown file
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create PDF document
    doc = SimpleDocTemplate(output_file, pagesize=A4, 
                          rightMargin=72, leftMargin=72, 
                          topMargin=72, bottomMargin=18)
    
    # Get styles
    styles = getSampleStyleSheet()
    
    # Create custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=20,
        spaceAfter=30,
        textColor=colors.HexColor('#2c5aa0'),
        alignment=TA_CENTER
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        spaceAfter=12,
        textColor=colors.HexColor('#2c5aa0'),
        alignment=TA_LEFT
    )
    
    subheading_style = ParagraphStyle(
        'CustomSubHeading',
        parent=styles['Heading3'],
        fontSize=14,
        spaceAfter=8,
        textColor=colors.HexColor('#4a6fa5'),
        alignment=TA_LEFT
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=6,
        alignment=TA_JUSTIFY
    )
    
    # Parse content and create elements
    elements = []
    
    # Split content into sections
    sections = content.split('\n## ')
    
    for i, section in enumerate(sections):
        if i == 0:
            # First section (title)
            lines = section.split('\n')
            title = lines[0].replace('# ', '').replace('**', '')
            elements.append(Paragraph(title, title_style))
            elements.append(Spacer(1, 12))
            
            # Add subtitle
            if len(lines) > 1:
                subtitle = lines[1].replace('*', '').strip()
                elements.append(Paragraph(subtitle, body_style))
                elements.append(Spacer(1, 20))
        else:
            # Other sections
            lines = section.split('\n')
            heading = lines[0].replace('**', '')
            elements.append(Paragraph(f"<b>{heading}</b>", heading_style))
            elements.append(Spacer(1, 8))
            
            # Process content
            for line in lines[1:]:
                line = line.strip()
                if not line:
                    continue
                elif line.startswith('- '):
                    # Bullet point
                    text = line[2:].replace('**', '<b>').replace('**', '</b>')
                    elements.append(Paragraph(f"• {text}", body_style))
                elif line.startswith('### '):
                    # Subheading
                    subheading = line[4:].replace('**', '')
                    elements.append(Paragraph(f"<b>{subheading}</b>", subheading_style))
                elif line.startswith('**') and line.endswith('**'):
                    # Bold text
                    text = line.replace('**', '')
                    elements.append(Paragraph(f"<b>{text}</b>", body_style))
                elif line.startswith('---'):
                    # Horizontal rule
                    elements.append(Spacer(1, 12))
                else:
                    # Regular text
                    if line:
                        elements.append(Paragraph(line, body_style))
            
            elements.append(Spacer(1, 15))
    
    # Add footer
    elements.append(Spacer(1, 30))
    elements.append(Paragraph("<b>Frehab Recovery Platform</b> | This worksheet is part of your recovery journey", 
                             ParagraphStyle('Footer', parent=styles['Normal'], fontSize=10, 
                                           textColor=colors.grey, alignment=TA_CENTER)))
    
    # Build PDF
    doc.build(elements)
    print(f"✅ PDF created successfully: {output_file}")

def main():
    """Main function"""
    md_file = "alcohol-free-celebrations.md"
    output_file = "public/worksheets/alcohol-free-celebrations.pdf"
    
    # Create output directory
    import os
    os.makedirs("public/worksheets", exist_ok=True)
    
    # Generate PDF
    create_pdf_from_markdown(md_file, output_file)
    
    # Check file size
    import os
    if os.path.exists(output_file):
        size_kb = os.path.getsize(output_file) / 1024
        print(f"📄 File size: {size_kb:.1f} KB")
        print(f"📁 Location: {output_file}")

if __name__ == "__main__":
    main()
