Browser("Browser").Navigate "https://greenlightgroup.harvestapp.com/overview" @@ hightlight id_;_1382492_;_script infofile_;_ssf1.xml_;_
Browser("Browser").Page("Dashboard – GreenLight").Link("Team").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf2.xml_;_
Browser("Browser").Page("Team Members – GreenLight").Link("Add Person").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf3.xml_;_
Browser("Browser").Page("Team Members Manage –").WebEdit("user[first_name]").Set "Bob" @@ hightlight id_;_10000000_;_script infofile_;_ssf4.xml_;_
Browser("Browser").Page("Team Members Manage –").WebElement("Last Name").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf5.xml_;_
Browser("Browser").Page("Team Members Manage –").WebEdit("user[last_name]").Set "Smith" @@ hightlight id_;_10000000_;_script infofile_;_ssf6.xml_;_
Browser("Browser").Page("Team Members Manage –").WebButton("Invite and Continue").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf7.xml_;_
Browser("Browser").Page("Team Members Manage –").WebEdit("user[email]").Set "joe@gmail.com" @@ hightlight id_;_10000000_;_script infofile_;_ssf8.xml_;_
Browser("Browser").Page("Team Members Manage –").WebEdit("WebEdit").Set "" @@ hightlight id_;_10000000_;_script infofile_;_ssf9.xml_;_
Browser("Browser").Page("Team Members Manage –").WebButton("Invite and Continue").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf10.xml_;_
Browser("Browser").Page("Team Members Manage –_2").WebElement("Time Entry (Non-Billable)").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf11.xml_;_
Browser("Browser").Page("Team Members Manage –_2").WebButton("Assign Projects").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf12.xml_;_
Browser("Browser").Page("Team Members Manage –_2").Link("Back to Team").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf13.xml_;_
Browser("Browser").Page("Team Members – GreenLight").Link("Dashboard").Click @@ hightlight id_;_10000000_;_script infofile_;_ssf14.xml_;_
