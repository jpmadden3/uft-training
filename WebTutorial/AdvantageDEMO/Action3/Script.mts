Browser("Advantage Shopping").Page("Advantage Shopping").Link("1").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set "cspeed"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "5f0794d5922b0454753dfe0a6bb668b9e848a467a2b5"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click



