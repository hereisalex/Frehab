#!/usr/bin/env python3
"""
Automated PDF Generator for Frehab Worksheets
Generates PDFs directly from HTML files using weasyprint
"""

import os
import sys
from pathlib import Path

def install_weasyprint():
    """Install weasyprint if not available"""
    try:
        import weasyprint
        return True
    except ImportError:
        print("Installing weasyprint...")
        os.system("pip install weasyprint")
        try:
            import weasyprint
            return True
        except ImportError:
            print("Failed to install weasyprint. Please install manually: pip install weasyprint")
            return False

def generate_pdf_from_html(html_file, output_file):
    """Generate PDF from HTML file using weasyprint"""
    try:
        import weasyprint
        
        # Read HTML file
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # Create PDF
        html_doc = weasyprint.HTML(string=html_content)
        html_doc.write_pdf(output_file)
        
        print(f"✅ Generated: {output_file}")
        return True
        
    except Exception as e:
        print(f"❌ Error generating {output_file}: {e}")
        return False

def generate_all_pdfs():
    """Generate all worksheet PDFs"""
    
    # Check if weasyprint is available
    if not install_weasyprint():
        print("Please install weasyprint manually: pip install weasyprint")
        return False
    
    # Create output directory
    output_dir = Path("public/worksheets")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # List of worksheets to generate
    worksheets = [
        {
            "html_file": "alcohol-free-celebrations-worksheet.html",
            "pdf_file": "alcohol-free-celebrations.pdf"
        },
        {
            "html_file": "alcohol-wellness-tracker-worksheet.html", 
            "pdf_file": "alcohol-wellness-tracker.pdf"
        }
    ]
    
    print("🚀 Generating PDFs for Frehab worksheets...")
    print("=" * 50)
    
    success_count = 0
    total_count = len(worksheets)
    
    for worksheet in worksheets:
        html_path = worksheet["html_file"]
        pdf_path = output_dir / worksheet["pdf_file"]
        
        if not os.path.exists(html_path):
            print(f"❌ HTML file not found: {html_path}")
            continue
            
        print(f"📄 Processing: {html_path}")
        
        if generate_pdf_from_html(html_path, str(pdf_path)):
            success_count += 1
            # Check file size
            if pdf_path.exists():
                size_kb = pdf_path.stat().st_size / 1024
                print(f"   📊 File size: {size_kb:.1f} KB")
        else:
            print(f"   ❌ Failed to generate PDF")
    
    print("=" * 50)
    print(f"🎉 Completed: {success_count}/{total_count} PDFs generated successfully")
    
    if success_count == total_count:
        print("✅ All worksheets are ready!")
        print(f"📁 Location: {output_dir.absolute()}")
    else:
        print("⚠️  Some PDFs failed to generate. Check the errors above.")
    
    return success_count == total_count

def main():
    """Main function"""
    print("Frehab Worksheet PDF Generator")
    print("=" * 40)
    
    # Check if we're in the right directory
    if not os.path.exists("alcohol-free-celebrations-worksheet.html"):
        print("❌ Error: Please run this script from the Frehab project root directory")
        print("   Make sure the HTML worksheet files are in the current directory")
        return False
    
    # Generate PDFs
    success = generate_all_pdfs()
    
    if success:
        print("\n🎯 Next steps:")
        print("1. Check the generated PDFs in public/worksheets/")
        print("2. Test the PDFs to ensure they look correct")
        print("3. Use this script for future worksheet generation")
    else:
        print("\n🔧 Troubleshooting:")
        print("1. Make sure weasyprint is installed: pip install weasyprint")
        print("2. Check that HTML files exist in the current directory")
        print("3. Try running: pip install --upgrade weasyprint")
    
    return success

if __name__ == "__main__":
    main()
