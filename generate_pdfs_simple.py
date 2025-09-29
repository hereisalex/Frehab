#!/usr/bin/env python3
"""
Simple PDF Generator using Chrome/Chromium headless
Alternative to weasyprint for better compatibility
"""

import os
import subprocess
import sys
from pathlib import Path

def check_chrome():
    """Check if Chrome/Chromium is available"""
    chrome_paths = [
        "chrome",
        "chromium", 
        "google-chrome",
        "chromium-browser",
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    ]
    
    for path in chrome_paths:
        try:
            result = subprocess.run([path, "--version"], 
                                  capture_output=True, text=True, timeout=5)
            if result.returncode == 0:
                print(f"✅ Found Chrome: {path}")
                return path
        except:
            continue
    
    return None

def generate_pdf_with_chrome(html_file, output_file):
    """Generate PDF using Chrome headless"""
    chrome_path = check_chrome()
    
    if not chrome_path:
        print("❌ Chrome/Chromium not found. Please install Chrome browser.")
        return False
    
    try:
        # Convert to absolute paths
        html_path = os.path.abspath(html_file)
        pdf_path = os.path.abspath(output_file)
        
        # Chrome command for PDF generation
        cmd = [
            chrome_path,
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--print-to-pdf=" + pdf_path,
            "--print-to-pdf-no-header",
            "--disable-extensions",
            "--disable-plugins",
            "--disable-images",  # Faster generation
            "--virtual-time-budget=5000",
            html_path
        ]
        
        print(f"🔄 Generating PDF: {os.path.basename(output_file)}")
        
        # Run Chrome command
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        
        if result.returncode == 0 and os.path.exists(pdf_path):
            size_kb = os.path.getsize(pdf_path) / 1024
            print(f"✅ Generated: {os.path.basename(output_file)} ({size_kb:.1f} KB)")
            return True
        else:
            print(f"❌ Failed to generate PDF: {result.stderr}")
            return False
            
    except subprocess.TimeoutExpired:
        print(f"❌ Timeout generating PDF: {output_file}")
        return False
    except Exception as e:
        print(f"❌ Error generating PDF: {e}")
        return False

def generate_all_pdfs():
    """Generate all worksheet PDFs using Chrome"""
    
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
    
    print("🚀 Generating PDFs using Chrome headless...")
    print("=" * 50)
    
    success_count = 0
    total_count = len(worksheets)
    
    for worksheet in worksheets:
        html_path = worksheet["html_file"]
        pdf_path = output_dir / worksheet["pdf_file"]
        
        if not os.path.exists(html_path):
            print(f"❌ HTML file not found: {html_path}")
            continue
        
        if generate_pdf_with_chrome(html_path, str(pdf_path)):
            success_count += 1
    
    print("=" * 50)
    print(f"🎉 Completed: {success_count}/{total_count} PDFs generated successfully")
    
    if success_count == total_count:
        print("✅ All worksheets are ready!")
        print(f"📁 Location: {output_dir.absolute()}")
    else:
        print("⚠️  Some PDFs failed to generate.")
    
    return success_count == total_count

def main():
    """Main function"""
    print("Frehab Worksheet PDF Generator (Chrome)")
    print("=" * 45)
    
    # Check if we're in the right directory
    if not os.path.exists("alcohol-free-celebrations-worksheet.html"):
        print("❌ Error: Please run this script from the Frehab project root directory")
        return False
    
    # Check Chrome availability
    if not check_chrome():
        print("❌ Chrome/Chromium not found.")
        print("Please install Google Chrome or Chromium browser.")
        return False
    
    # Generate PDFs
    success = generate_all_pdfs()
    
    if success:
        print("\n🎯 PDFs generated successfully!")
        print("Check the public/worksheets/ directory for your files.")
    else:
        print("\n🔧 Troubleshooting:")
        print("1. Make sure Chrome/Chromium is installed")
        print("2. Check that HTML files exist in the current directory")
        print("3. Try running the script as administrator")
    
    return success

if __name__ == "__main__":
    main()
