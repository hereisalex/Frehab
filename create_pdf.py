#!/usr/bin/env python3
"""
Create PDF worksheet using reportlab
"""

try:
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.units import inch
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
    from reportlab.lib import colors
    from reportlab.lib.enums import TA_LEFT, TA_CENTER
    import os
    
    def create_worksheet_pdf():
        # Create output directory
        os.makedirs("public/worksheets", exist_ok=True)
        
        # Create PDF
        doc = SimpleDocTemplate("public/worksheets/alcohol-free-celebrations.pdf", 
                              pagesize=A4, rightMargin=72, leftMargin=72, 
                              topMargin=72, bottomMargin=18)
        
        # Get styles
        styles = getSampleStyleSheet()
        
        # Create custom styles
        title_style = ParagraphStyle(
            'Title',
            parent=styles['Heading1'],
            fontSize=20,
            spaceAfter=30,
            textColor=colors.HexColor('#2c5aa0'),
            alignment=TA_CENTER
        )
        
        heading_style = ParagraphStyle(
            'Heading',
            parent=styles['Heading2'],
            fontSize=16,
            spaceAfter=12,
            textColor=colors.HexColor('#2c5aa0')
        )
        
        body_style = ParagraphStyle(
            'Body',
            parent=styles['Normal'],
            fontSize=11,
            spaceAfter=6
        )
        
        # Content
        elements = []
        
        # Title
        elements.append(Paragraph("Alcohol-Free Celebration Planner", title_style))
        elements.append(Spacer(1, 12))
        
        # Subtitle
        elements.append(Paragraph("Your Recovery Journey Celebration Guide", body_style))
        elements.append(Spacer(1, 20))
        
        # Introduction
        elements.append(Paragraph("Congratulations on choosing to celebrate life without alcohol! This planner will help you design meaningful, memorable celebrations that honor your achievements and create lasting positive memories.", body_style))
        elements.append(Spacer(1, 20))
        
        # Celebration Categories
        elements.append(Paragraph("Celebration Categories", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Personal Achievements:", body_style))
        elements.append(Paragraph("• 30 days sober", body_style))
        elements.append(Paragraph("• 90 days sober", body_style))
        elements.append(Paragraph("• 6 months sober", body_style))
        elements.append(Paragraph("• 1 year sober", body_style))
        elements.append(Paragraph("• Career milestone", body_style))
        elements.append(Paragraph("• Fitness goal achieved", body_style))
        elements.append(Paragraph("• Educational accomplishment", body_style))
        elements.append(Paragraph("• Personal growth milestone", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("Holidays & Special Occasions:", body_style))
        elements.append(Paragraph("• New Year's Eve", body_style))
        elements.append(Paragraph("• Valentine's Day", body_style))
        elements.append(Paragraph("• St. Patrick's Day", body_style))
        elements.append(Paragraph("• Easter", body_style))
        elements.append(Paragraph("• Mother's Day/Father's Day", body_style))
        elements.append(Paragraph("• Fourth of July", body_style))
        elements.append(Paragraph("• Halloween", body_style))
        elements.append(Paragraph("• Thanksgiving", body_style))
        elements.append(Paragraph("• Christmas", body_style))
        elements.append(Paragraph("• Birthday", body_style))
        elements.append(Paragraph("• Anniversary", body_style))
        elements.append(Spacer(1, 20))
        
        # Celebration Ideas
        elements.append(Paragraph("Alcohol-Free Celebration Ideas", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("At-Home Celebrations:", body_style))
        elements.append(Paragraph("• Mocktail Party: Create signature non-alcoholic drinks", body_style))
        elements.append(Paragraph("• Game Night: Board games, card games, trivia", body_style))
        elements.append(Paragraph("• Movie Marathon: Themed movie nights with snacks", body_style))
        elements.append(Paragraph("• Cooking Challenge: Try new recipes together", body_style))
        elements.append(Paragraph("• Spa Night: DIY facials, massages, relaxation", body_style))
        elements.append(Paragraph("• Art & Craft Night: Painting, pottery, DIY projects", body_style))
        elements.append(Paragraph("• Dance Party: Create playlists and dance", body_style))
        elements.append(Paragraph("• Book Club: Reading and discussion", body_style))
        elements.append(Paragraph("• Garden Party: Outdoor activities and fresh air", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("Outdoor Activities:", body_style))
        elements.append(Paragraph("• Hiking Adventure: Nature trails and scenic views", body_style))
        elements.append(Paragraph("• Beach Day: Swimming, volleyball, sandcastle building", body_style))
        elements.append(Paragraph("• Picnic in the Park: Outdoor dining and games", body_style))
        elements.append(Paragraph("• Sports Day: Basketball, soccer, tennis", body_style))
        elements.append(Paragraph("• Camping Trip: Outdoor adventure and bonding", body_style))
        elements.append(Paragraph("• Bike Ride: Explore new areas", body_style))
        elements.append(Paragraph("• Photography Walk: Capture beautiful moments", body_style))
        elements.append(Paragraph("• Volunteer Work: Give back to community", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("Social Gatherings:", body_style))
        elements.append(Paragraph("• Potluck Dinner: Everyone brings a dish", body_style))
        elements.append(Paragraph("• Themed Party: Costume parties, decade themes", body_style))
        elements.append(Paragraph("• Karaoke Night: Sing your heart out", body_style))
        elements.append(Paragraph("• Trivia Night: Test your knowledge", body_style))
        elements.append(Paragraph("• Escape Room: Problem-solving adventure", body_style))
        elements.append(Paragraph("• Bowling Night: Fun and competitive", body_style))
        elements.append(Paragraph("• Concert/Show: Live entertainment", body_style))
        elements.append(Paragraph("• Museum Visit: Cultural enrichment", body_style))
        elements.append(Spacer(1, 20))
        
        # Planning Worksheet
        elements.append(Paragraph("Celebration Planning Worksheet", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Event Details:", body_style))
        elements.append(Paragraph("Celebration Type: _________________", body_style))
        elements.append(Paragraph("Date: _________________", body_style))
        elements.append(Paragraph("Time: _________________", body_style))
        elements.append(Paragraph("Location: _________________", body_style))
        elements.append(Paragraph("Number of Guests: _________________", body_style))
        elements.append(Paragraph("Budget: $_________________", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("Planning Checklist:", body_style))
        elements.append(Paragraph("□ Set date and time", body_style))
        elements.append(Paragraph("□ Choose location", body_style))
        elements.append(Paragraph("□ Create guest list", body_style))
        elements.append(Paragraph("□ Send invitations", body_style))
        elements.append(Paragraph("□ Plan menu (alcohol-free)", body_style))
        elements.append(Paragraph("□ Prepare activities", body_style))
        elements.append(Paragraph("□ Decorate space", body_style))
        elements.append(Paragraph("□ Create playlist", body_style))
        elements.append(Paragraph("□ Plan transportation", body_style))
        elements.append(Paragraph("□ Have backup plan", body_style))
        elements.append(Spacer(1, 20))
        
        # Menu Planning
        elements.append(Paragraph("Menu Planning:", body_style))
        elements.append(Paragraph("Appetizers:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Main Course:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Desserts:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Beverages:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 20))
        
        # Activity Planning
        elements.append(Paragraph("Activity Planning:", body_style))
        elements.append(Paragraph("Primary Activity: _________________", body_style))
        elements.append(Paragraph("Backup Activities:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("Special Moments: _________________", body_style))
        elements.append(Spacer(1, 20))
        
        # Celebration Goals
        elements.append(Paragraph("Celebration Goals", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("What I Want to Achieve:", body_style))
        elements.append(Paragraph("□ Have fun without alcohol", body_style))
        elements.append(Paragraph("□ Connect with loved ones", body_style))
        elements.append(Paragraph("□ Create positive memories", body_style))
        elements.append(Paragraph("□ Celebrate my progress", body_style))
        elements.append(Paragraph("□ Show others recovery is possible", body_style))
        elements.append(Paragraph("□ Build new traditions", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("My Support System:", body_style))
        elements.append(Paragraph("People I can count on:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("If I feel triggered, I will:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Emergency contact:", body_style))
        elements.append(Paragraph("Name: _________________", body_style))
        elements.append(Paragraph("Phone: _________________", body_style))
        elements.append(Spacer(1, 20))
        
        # Creative Ideas
        elements.append(Paragraph("Creative Celebration Ideas", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Milestone Celebrations:", body_style))
        elements.append(Paragraph("• 30 Days: Treat yourself to something special", body_style))
        elements.append(Paragraph("• 90 Days: Plan a day trip or mini-vacation", body_style))
        elements.append(Paragraph("• 6 Months: Host a celebration dinner", body_style))
        elements.append(Paragraph("• 1 Year: Plan a meaningful experience or trip", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("Holiday Alternatives:", body_style))
        elements.append(Paragraph("• New Year's Eve: Mocktail party with countdown", body_style))
        elements.append(Paragraph("• St. Patrick's Day: Green-themed non-alcoholic party", body_style))
        elements.append(Paragraph("• Fourth of July: BBQ with alcohol-free beverages", body_style))
        elements.append(Paragraph("• Halloween: Costume party with themed mocktails", body_style))
        elements.append(Paragraph("• Thanksgiving: Focus on gratitude and family", body_style))
        elements.append(Paragraph("• Christmas: Gift exchange and holiday activities", body_style))
        elements.append(Spacer(1, 20))
        
        # Reflection
        elements.append(Paragraph("Reflection & Planning", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("After Each Celebration:", body_style))
        elements.append(Paragraph("What went well:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("What I learned:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("What I'd do differently:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("How I felt:", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Paragraph("• _________________", body_style))
        elements.append(Spacer(1, 20))
        
        # Success Tips
        elements.append(Paragraph("Celebration Success Tips", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("Before the Event:", body_style))
        elements.append(Paragraph("• Plan ahead and be prepared", body_style))
        elements.append(Paragraph("• Have non-alcoholic options ready", body_style))
        elements.append(Paragraph("• Communicate your needs to others", body_style))
        elements.append(Paragraph("• Practice responses to alcohol offers", body_style))
        elements.append(Paragraph("• Have an exit strategy if needed", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("During the Event:", body_style))
        elements.append(Paragraph("• Focus on the people and activities", body_style))
        elements.append(Paragraph("• Stay hydrated with water", body_style))
        elements.append(Paragraph("• Eat regularly to maintain energy", body_style))
        elements.append(Paragraph("• Take breaks if you feel overwhelmed", body_style))
        elements.append(Paragraph("• Remember why you're celebrating", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("After the Event:", body_style))
        elements.append(Paragraph("• Reflect on the positive experiences", body_style))
        elements.append(Paragraph("• Journal about your feelings", body_style))
        elements.append(Paragraph("• Share your success with your support system", body_style))
        elements.append(Paragraph("• Plan your next celebration", body_style))
        elements.append(Paragraph("• Be proud of your alcohol-free choice", body_style))
        elements.append(Spacer(1, 20))
        
        # Resources
        elements.append(Paragraph("Resources & Support", heading_style))
        elements.append(Spacer(1, 8))
        
        elements.append(Paragraph("If you need help planning or feel triggered:", body_style))
        elements.append(Paragraph("• Sponsor: _________________", body_style))
        elements.append(Paragraph("• Therapist: _________________", body_style))
        elements.append(Paragraph("• Support Group: _________________", body_style))
        elements.append(Paragraph("• Crisis Line: 988 (Suicide & Crisis Lifeline)", body_style))
        elements.append(Paragraph("• SAMHSA Helpline: 1-800-662-4357", body_style))
        elements.append(Spacer(1, 12))
        
        elements.append(Paragraph("Remember: You deserve to celebrate your achievements and milestones. Alcohol-free celebrations can be just as meaningful, fun, and memorable as any other celebration. You're creating new traditions and showing yourself and others that life in recovery is worth celebrating!", body_style))
        elements.append(Spacer(1, 20))
        
        # Footer
        elements.append(Paragraph("Frehab Recovery Platform | This worksheet is part of your recovery journey", 
                                 ParagraphStyle('Footer', parent=styles['Normal'], fontSize=10, 
                                               textColor=colors.grey, alignment=TA_CENTER)))
        
        # Build PDF
        doc.build(elements)
        print("✅ PDF created successfully!")
        
        # Check file size
        if os.path.exists("public/worksheets/alcohol-free-celebrations.pdf"):
            size_kb = os.path.getsize("public/worksheets/alcohol-free-celebrations.pdf") / 1024
            print(f"📄 File size: {size_kb:.1f} KB")
            print(f"📁 Location: public/worksheets/alcohol-free-celebrations.pdf")
    
    if __name__ == "__main__":
        create_worksheet_pdf()
        
except ImportError as e:
    print(f"❌ Missing dependency: {e}")
    print("Installing reportlab...")
    import subprocess
    subprocess.run(["pip", "install", "reportlab"])
    print("Please run the script again.")
except Exception as e:
    print(f"❌ Error: {e}")
