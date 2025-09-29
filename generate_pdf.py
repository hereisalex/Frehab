#!/usr/bin/env python3
"""
PDF Generator for Frehab Worksheets
Converts Markdown content to professional PDF worksheets
"""

import markdown
import pdfkit
from pathlib import Path
import re

def create_html_from_markdown(md_file):
    """Convert markdown to HTML with custom styling"""
    
    # Read markdown file
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Convert markdown to HTML
    html = markdown.markdown(content, extensions=['tables', 'fenced_code'])
    
    # Add custom CSS styling
    css = """
    <style>
    @page {
        size: A4;
        margin: 1in;
    }
    
    body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 8.5in;
        margin: 0 auto;
    }
    
    h1 {
        color: #2c5aa0;
        border-bottom: 3px solid #2c5aa0;
        padding-bottom: 10px;
        font-size: 24px;
    }
    
    h2 {
        color: #2c5aa0;
        font-size: 18px;
        margin-top: 25px;
        margin-bottom: 15px;
    }
    
    h3 {
        color: #4a6fa5;
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    
    .worksheet-field {
        border-bottom: 1px solid #ccc;
        padding: 2px 0;
        min-height: 20px;
        display: inline-block;
        min-width: 200px;
    }
    
    ul, ol {
        margin: 10px 0;
        padding-left: 20px;
    }
    
    li {
        margin: 5px 0;
    }
    
    hr {
        border: none;
        border-top: 2px solid #2c5aa0;
        margin: 20px 0;
    }
    
    .checkbox {
        margin-right: 8px;
    }
    
    .section {
        margin-bottom: 30px;
    }
    
    .highlight {
        background-color: #f0f8ff;
        padding: 10px;
        border-left: 4px solid #2c5aa0;
        margin: 15px 0;
    }
    
    .footer {
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid #ccc;
        font-size: 12px;
        color: #666;
    }
    </style>
    """
    
    # Wrap in full HTML document
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Frehab Worksheet</title>
        {css}
    </head>
    <body>
        {html}
        <div class="footer">
            <p><strong>Frehab Recovery Platform</strong> | This worksheet is part of your recovery journey</p>
        </div>
    </body>
    </html>
    """
    
    return full_html

def generate_pdf(md_file, output_file):
    """Generate PDF from markdown file"""
    
    print(f"Converting {md_file} to PDF...")
    
    # Convert markdown to styled HTML
    html_content = create_html_from_markdown(md_file)
    
    # Configure PDF options
    options = {
        'page-size': 'A4',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'no-outline': None,
        'enable-local-file-access': None
    }
    
    try:
        # Generate PDF
        pdfkit.from_string(html_content, output_file, options=options)
        print(f"✅ Successfully created: {output_file}")
        return True
    except Exception as e:
        print(f"❌ Error generating PDF: {e}")
        return False

def main():
    """Main function to generate PDF"""
    
    # Input and output files
    md_file = "alcohol-free-celebrations.md"
    output_file = "public/worksheets/alcohol-free-celebrations.pdf"
    
    # Create output directory if it doesn't exist
    Path("public/worksheets").mkdir(parents=True, exist_ok=True)
    
    # Generate PDF
    success = generate_pdf(md_file, output_file)
    
    if success:
        print(f"\n🎉 PDF generated successfully!")
        print(f"📁 Location: {output_file}")
        print(f"📄 File size: {Path(output_file).stat().st_size / 1024:.1f} KB")
    else:
        print("\n❌ PDF generation failed")

if __name__ == "__main__":
    main()
