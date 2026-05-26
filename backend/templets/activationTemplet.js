const activationTemplate = (fullName, link) => {
 return`
	<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600|Open+Sans:400,600"
    rel="stylesheet">

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffc1a6;
      font-family: 'Open Sans', sans-serif;
      color: #333;
    }

    table {
      border-spacing: 0;
      width: 100%;
    }

    .wrapper {
      width: 100%;
      padding: 30px 15px;
    }

    .container {
      max-width: 650px;
      margin: auto;
      background: #ffffff;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
    }

    .header {
      padding: 25px 35px;
    }

    .brand {
      font-family: 'Poppins', sans-serif;
      font-size: 26px;
      font-weight: 600;
      color: #fe5d37;
    }

    .social {
      text-align: right;
    }

    .social img {
      width: 28px;
      margin-left: 10px;
    }

    .hero-img {
      width: 100%;
      display: block;
    }

    .content {
      padding: 40px 35px;
      text-align: center;
    }

    .tagline {
      color: #b1aed1;
      font-size: 14px;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .title {
      font-family: 'Poppins', sans-serif;
      font-size: 38px;
      color: #2d2d42;
      margin: 0 0 25px;
    }

    .welcome {
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      color: #333;
      margin: 30px 0 15px;
    }

    .text {
      font-size: 16px;
      line-height: 1.8;
      color: #666;
      margin-bottom: 30px;
    }

    .button {
      display: inline-block;
      background: #fe5d37;
      color: #ffffff !important;
      text-decoration: none;
      padding: 15px 40px;
      border-radius: 50px;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .footer {
      padding: 25px;
      text-align: center;
      background: #fafafa;
      color: #888;
      font-size: 13px;
      border-top: 1px solid #eee;
    }

    @media screen and (max-width: 670px) {

      .header,
      .content {
        padding: 25px 20px;
      }

      .brand {
        font-size: 22px;
      }

      .title {
        font-size: 30px;
      }

      .welcome {
        font-size: 26px;
      }

      .social {
        padding-top: 15px;
        text-align: center !important;
      }

      .mobile-center {
        text-align: center !important;
        display: block;
        width: 100% !important;
      }
    }
  </style>
</head>

<body>

  <div class="wrapper">

    <table role="presentation">
      <tr>
        <td align="center">

          <table class="container" role="presentation">

            <!-- HEADER -->
            <tr>
              <td class="header">

                <table role="presentation">
                  <tr>

                    <!-- COMPANY NAME -->
                    <td class="mobile-center" style="width:50%;">

					<div class="brand" style="
						display:flex;
						align-items:center;
						gap:10px;
					">

						<img
						src="cid:logo"
						width="42"
						height="42"
						alt="Little's Castle Logo"
						style="display:block;"
						>

						<span>Little's Castle</span>

					</div>

					</td>
                    <!-- SOCIAL ICONS -->
                    <td class="social mobile-center" style="width:50%;">

                      <a href="https://facebook.com">
                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png"
                          alt="Facebook">
                      </a>

                      <a href="https://twitter.com">
                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png"
                          alt="Twitter">
                      </a>

                      <a href="https://instagram.com">
                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png"
                          alt="Instagram">
                      </a>

                    </td>

                  </tr>
                </table>

              </td>
            </tr>

            <!-- HERO IMAGE -->
            <tr>
              <td>
                <img class="hero-img"
                  src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/10331/Top.png"
                  alt="Banner">
              </td>
            </tr>

            <!-- CONTENT -->
            <tr>
              <td class="content">

                <div class="tagline">
                  THANK YOU FOR CONNECTING WITH US
                </div>

                <h1 class="title">
                  Let's Stay Together.
                </h1>

                <img src="https://6791c5f202.imgdist.com/pub/bfra/9mq14n4y/0n6/ltn/tpk/button-start-on-light-power-4203036.jpg"
                  alt="Welcome"
                  style="width:100%;max-width:560px;border-radius:12px;">

                <h2 class="welcome">
                  Welcome ${fullName}
                </h2>

                <p class="text">
                  We’re excited to have you join Little's Castle.
                  Please activate your account to begin your journey with us.
                </p>

                <a href="${link}" class="button">
                  ACTIVATE ACCOUNT
                </a>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td class="footer">

                © 2026 Little's Castle. All rights reserved.

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </div>

</body>

</html>
 `;
};

module.exports = activationTemplate;