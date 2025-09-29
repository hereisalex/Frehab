#!/usr/bin/env python3
"""
Create a simple PDF using basic Python libraries
"""

import os

def create_simple_pdf():
    """Create a simple PDF using HTML to PDF conversion"""
    
    # Create output directory
    os.makedirs("public/worksheets", exist_ok=True)
    
    # HTML content for the PDF
    html_content = """
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Alcohol-Free Celebration Planner</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            h1 { color: #2c5aa0; text-align: center; border-bottom: 2px solid #2c5aa0; padding-bottom: 10px; }
            h2 { color: #2c5aa0; margin-top: 25px; }
            h3 { color: #4a6fa5; margin-top: 20px; }
            .fill-field { border-bottom: 1px solid #333; padding: 2px 5px; min-width: 150px; display: inline-block; }
            ul { margin: 10px 0; padding-left: 20px; }
            li { margin: 5px 0; }
            .highlight { background-color: #f0f8ff; padding: 10px; border-left: 4px solid #2c5aa0; margin: 15px 0; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666; text-align: center; }
        </style>
    </head>
    <body>
        <h1>Alcohol-Free Celebration Planner</h1>
        
        <div class="highlight">
            <p><strong>Your Recovery Journey Celebration Guide</strong></p>
            <p>Congratulations on choosing to celebrate life without alcohol! This planner will help you design meaningful, memorable celebrations that honor your achievements and create lasting positive memories.</p>
        </div>

        <h2>🎉 Celebration Categories</h2>
        
        <h3>Personal Achievements</h3>
        <ul>
            <li>☐ 30 days sober</li>
            <li>☐ 90 days sober</li>
            <li>☐ 6 months sober</li>
            <li>☐ 1 year sober</li>
            <li>☐ Career milestone</li>
            <li>☐ Fitness goal achieved</li>
            <li>☐ Educational accomplishment</li>
            <li>☐ Personal growth milestone</li>
            <li>☐ Other: <span class="fill-field"></span></li>
        </ul>

        <h3>Holidays & Special Occasions</h3>
        <ul>
            <li>☐ New Year's Eve</li>
            <li>☐ Valentine's Day</li>
            <li>☐ St. Patrick's Day</li>
            <li>☐ Easter</li>
            <li>☐ Mother's Day/Father's Day</li>
            <li>☐ Fourth of July</li>
            <li>☐ Halloween</li>
            <li>☐ Thanksgiving</li>
            <li>☐ Christmas</li>
            <li>☐ Birthday</li>
            <li>☐ Anniversary</li>
            <li>☐ Other: <span class="fill-field"></span></li>
        </ul>

        <h2>🍹 Alcohol-Free Celebration Ideas</h2>

        <h3>At-Home Celebrations</h3>
        <ul>
            <li><strong>Mocktail Party</strong>: Create signature non-alcoholic drinks</li>
            <li><strong>Game Night</strong>: Board games, card games, trivia</li>
            <li><strong>Movie Marathon</strong>: Themed movie nights with snacks</li>
            <li><strong>Cooking Challenge</strong>: Try new recipes together</li>
            <li><strong>Spa Night</strong>: DIY facials, massages, relaxation</li>
            <li><strong>Art & Craft Night</strong>: Painting, pottery, DIY projects</li>
            <li><strong>Dance Party</strong>: Create playlists and dance</li>
            <li><strong>Book Club</strong>: Reading and discussion</li>
            <li><strong>Garden Party</strong>: Outdoor activities and fresh air</li>
            <li><strong>Other</strong>: <span class="fill-field"></span></li>
        </ul>

        <h3>Outdoor Activities</h3>
        <ul>
            <li><strong>Hiking Adventure</strong>: Nature trails and scenic views</li>
            <li><strong>Beach Day</strong>: Swimming, volleyball, sandcastle building</li>
            <li><strong>Picnic in the Park</strong>: Outdoor dining and games</li>
            <li><strong>Sports Day</strong>: Basketball, soccer, tennis</li>
            <li><strong>Camping Trip</strong>: Outdoor adventure and bonding</li>
            <li><strong>Bike Ride</strong>: Explore new areas</li>
            <li><strong>Photography Walk</strong>: Capture beautiful moments</li>
            <li><strong>Volunteer Work</strong>: Give back to community</li>
            <li><strong>Other</strong>: <span class="fill-field"></span></li>
        </ul>

        <h3>Social Gatherings</h3>
        <ul>
            <li><strong>Potluck Dinner</strong>: Everyone brings a dish</li>
            <li><strong>Themed Party</strong>: Costume parties, decade themes</li>
            <li><strong>Karaoke Night</strong>: Sing your heart out</li>
            <li><strong>Trivia Night</strong>: Test your knowledge</li>
            <li><strong>Escape Room</strong>: Problem-solving adventure</li>
            <li><strong>Bowling Night</strong>: Fun and competitive</li>
            <li><strong>Concert/Show</strong>: Live entertainment</li>
            <li><strong>Museum Visit</strong>: Cultural enrichment</li>
            <li><strong>Other</strong>: <span class="fill-field"></span></li>
        </ul>

        <h2>📅 Celebration Planning Worksheet</h2>

        <h3>Event Details</h3>
        <p><strong>Celebration Type</strong>: <span class="fill-field"></span></p>
        <p><strong>Date</strong>: <span class="fill-field"></span></p>
        <p><strong>Time</strong>: <span class="fill-field"></span></p>
        <p><strong>Location</strong>: <span class="fill-field"></span></p>
        <p><strong>Number of Guests</strong>: <span class="fill-field"></span></p>
        <p><strong>Budget</strong>: $<span class="fill-field"></span></p>

        <h3>Planning Checklist</h3>
        <ul>
            <li>☐ Set date and time</li>
            <li>☐ Choose location</li>
            <li>☐ Create guest list</li>
            <li>☐ Send invitations</li>
            <li>☐ Plan menu (alcohol-free)</li>
            <li>☐ Prepare activities</li>
            <li>☐ Decorate space</li>
            <li>☐ Create playlist</li>
            <li>☐ Plan transportation</li>
            <li>☐ Have backup plan</li>
        </ul>

        <h3>Menu Planning</h3>
        <p><strong>Appetizers:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>Main Course:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>Desserts:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>Beverages:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <h3>Activity Planning</h3>
        <p><strong>Primary Activity</strong>: <span class="fill-field"></span></p>
        <p><strong>Backup Activities:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>
        <p><strong>Special Moments</strong>: <span class="fill-field"></span></p>

        <h2>🎯 Celebration Goals</h2>

        <h3>What I Want to Achieve</h3>
        <ul>
            <li>☐ Have fun without alcohol</li>
            <li>☐ Connect with loved ones</li>
            <li>☐ Create positive memories</li>
            <li>☐ Celebrate my progress</li>
            <li>☐ Show others recovery is possible</li>
            <li>☐ Build new traditions</li>
            <li>☐ Other: <span class="fill-field"></span></li>
        </ul>

        <h3>My Support System</h3>
        <p><strong>People I can count on:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>If I feel triggered, I will:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>Emergency contact:</strong></p>
        <p>Name: <span class="fill-field"></span></p>
        <p>Phone: <span class="fill-field"></span></p>

        <h2>💡 Creative Celebration Ideas</h2>

        <h3>Milestone Celebrations</h3>
        <ul>
            <li><strong>30 Days</strong>: Treat yourself to something special</li>
            <li><strong>90 Days</strong>: Plan a day trip or mini-vacation</li>
            <li><strong>6 Months</strong>: Host a celebration dinner</li>
            <li><strong>1 Year</strong>: Plan a meaningful experience or trip</li>
        </ul>

        <h3>Holiday Alternatives</h3>
        <ul>
            <li><strong>New Year's Eve</strong>: Mocktail party with countdown</li>
            <li><strong>St. Patrick's Day</strong>: Green-themed non-alcoholic party</li>
            <li><strong>Fourth of July</strong>: BBQ with alcohol-free beverages</li>
            <li><strong>Halloween</strong>: Costume party with themed mocktails</li>
            <li><strong>Thanksgiving</strong>: Focus on gratitude and family</li>
            <li><strong>Christmas</strong>: Gift exchange and holiday activities</li>
        </ul>

        <h3>Unique Celebration Ideas</h3>
        <ul>
            <li><strong>Soberversary Party</strong>: Annual celebration of sobriety</li>
            <li><strong>Recovery Milestone</strong>: Mark significant progress</li>
            <li><strong>Life Achievement</strong>: Celebrate non-alcohol related wins</li>
            <li><strong>Seasonal Celebration</strong>: Mark the changing seasons</li>
            <li><strong>Cultural Celebration</strong>: Honor your heritage</li>
            <li><strong>Community Service</strong>: Celebrate by giving back</li>
        </ul>

        <h2>📝 Reflection & Planning</h2>

        <h3>After Each Celebration</h3>
        <p><strong>What went well:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>What I learned:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>What I'd do differently:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <p><strong>How I felt:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <h3>Next Celebration Planning</h3>
        <p><strong>Upcoming celebration:</strong> <span class="fill-field"></span></p>
        <p><strong>Date:</strong> <span class="fill-field"></span></p>
        <p><strong>Ideas I want to try:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>
        <p><strong>People I want to include:</strong></p>
        <ul>
            <li><span class="fill-field"></span></li>
            <li><span class="fill-field"></span></li>
        </ul>

        <h2>🎊 Celebration Success Tips</h2>

        <h3>Before the Event</h3>
        <ul>
            <li>Plan ahead and be prepared</li>
            <li>Have non-alcoholic options ready</li>
            <li>Communicate your needs to others</li>
            <li>Practice responses to alcohol offers</li>
            <li>Have an exit strategy if needed</li>
        </ul>

        <h3>During the Event</h3>
        <ul>
            <li>Focus on the people and activities</li>
            <li>Stay hydrated with water</li>
            <li>Eat regularly to maintain energy</li>
            <li>Take breaks if you feel overwhelmed</li>
            <li>Remember why you're celebrating</li>
        </ul>

        <h3>After the Event</h3>
        <ul>
            <li>Reflect on the positive experiences</li>
            <li>Journal about your feelings</li>
            <li>Share your success with your support system</li>
            <li>Plan your next celebration</li>
            <li>Be proud of your alcohol-free choice</li>
        </ul>

        <h2>📞 Resources & Support</h2>

        <p><strong>If you need help planning or feel triggered:</strong></p>
        <ul>
            <li>Sponsor: <span class="fill-field"></span></li>
            <li>Therapist: <span class="fill-field"></span></li>
            <li>Support Group: <span class="fill-field"></span></li>
            <li>Crisis Line: 988 (Suicide & Crisis Lifeline)</li>
            <li>SAMHSA Helpline: 1-800-662-4357</li>
        </ul>

        <div class="highlight">
            <p><strong>Remember</strong>: You deserve to celebrate your achievements and milestones. Alcohol-free celebrations can be just as meaningful, fun, and memorable as any other celebration. You're creating new traditions and showing yourself and others that life in recovery is worth celebrating!</p>
        </div>

        <div class="footer">
            <p><strong>Frehab Recovery Platform</strong> | This worksheet is part of your recovery journey</p>
        </div>
    </body>
    </html>
    """
    
    # Write HTML file
    with open("temp_worksheet.html", "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print("✅ HTML file created: temp_worksheet.html")
    print("📄 You can now:")
    print("1. Open temp_worksheet.html in your browser")
    print("2. Use Ctrl+P to print")
    print("3. Choose 'Save as PDF' as destination")
    print("4. Save as 'alcohol-free-celebrations.pdf' in public/worksheets/")
    
    return True

if __name__ == "__main__":
    create_simple_pdf()
