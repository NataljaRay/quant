<footer>
    <div class="container">
        <div class="footer">
            <div class="rss_box">
                <ul>
                    <li><a href=""><img src="images/facebook.svg" alt=""></a></li>
                    <li><a href=""><img src="images/twitter.svg" alt=""></a></li>
                    <li><a href=""><img src="images/google.svg" alt=""></a></li>
                    <li><a href=""><img src="images/reddit.svg" alt=""></a></li>
                    <li><a href=""><img src="images/medium.svg" alt=""></a></li>
                    <li><a href=""><img src="images/youtube.svg" alt=""></a></li>
                    <li><a href=""><img src="images/telegram.svg" alt=""></a></li>
                    <li><a href=""><img src="images/linkedin.svg" alt=""></a></li>
                </ul>
            </div>
            <p>The material on this website is provided for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation or endorsement for any security or strategy, nor does it constitute an offer to provide investment advisory services by Quantopian. In addition, the material offers no opinion with respect to the suitability of any security or specific investment. No information contained herein should be regarded as a suggestion to engage in or refrain from any investment-related course of action as none of Quantopian nor any of its affiliates is undertaking to provide investment advice, act as an adviser to any plan or entity subject to the Employee Retirement Income Security Act of 1974, as amended, individual retirement account or individual retirement annuity, or give advice in a fiduciary capacity with respect to the materials presented herein. If you are an individual retirement or other investor, contact your financial advisor or other fiduciary unrelated to Quantopian about whether any given investment idea, strategy, product or service described herein may be appropriate for your circumstances. All investments involve risk, including loss of principal. Quantopian makes no guarantees as to the accuracy or completeness of the views expressed in the website. The views are subject to change, and may have become unreliable for various reasons, including changes in market conditions or economic circumstances.</p>
        </div>
    </div>
</footer>


<div class="popup_layout"></div>

<div class="popup_wrapper" id="login_popup">
    <div class="popup_inner login_popup">
        <div class="login_popup_inner">
            <a href="" class="close_modal">Close</a>
            
            <div class="form_logo">
                <img src="images/logo.svg" alt="">
            </div>

            <div class="login_header my_tabs" >
                <a href="" class="active" data-to_tab="login_form" data-tab_id="1">I’m a Quant</a>
                <a href="" data-to_tab="login_form" data-tab_id="2">I’m an Investor</a>
            </div>

            <form class="login_form active" data-from_tab="login_form" data-tab_id="1">
                <input type="text" value="mail@mail.ru" class="error_input" placeholder="E-mail">
                <input type="password" placeholder="Password">
                <div class="form_errors_box">
                    <p>Wrong e-mail or password</p>
                </div>
                <input type="submit" value="Login">
                <p><a href="">Forgot Your Password?</a></p>
            </form>
            <form class="login_form" data-from_tab="login_form" data-tab_id="2">
                <input type="text" placeholder="E-mail">
                <input type="password" placeholder="Password">
                <div class="form_errors_box">
                    <p></p>
                </div>
                <input type="submit" value="Login">
                <p><a href="">Forgot Your Password?</a></p>
            </form>
        </div>
        <a href="#register_popup" class="border_link get_modal"><span>Create New Account</span></a>
    </div>
</div>



<div class="popup_wrapper" id="register_popup">
    <div class="popup_inner login_popup">
        <div class="login_popup_inner">
            <a href="" class="close_modal">Close</a>

            <div class="form_logo">
                <img src="images/logo.svg" alt="">
                <h4>New Account</h4>
            </div>

            <div class="login_header my_tabs" >
                <a href="" class="active" data-to_tab="register_form" data-tab_id="1">I’m a Quant</a>
                <a href="" data-to_tab="register_form" data-tab_id="2">I’m an Investor</a>
            </div>

            <form class="login_form active" data-from_tab="register_form" data-tab_id="1">
                <input type="text" placeholder="E-mail" class="error_input">
                <input type="password" placeholder="Password">
                <input type="text" placeholder="Your First Name">
                <input type="text" placeholder="Your Last Name">
                <div class="with_title">
                    <p>Date of Birth</p>
                    <div class="birth_day_select">
                        <div class="birth_day_select_item">
                            <select title="birth_year" class="my_select" name="birth_year">
                                <option value="Year" selected hidden>Year</option>
                                <option value="2000">2000</option>
                                <option value="2000">1999</option>
                                <option value="2000">1998</option>
                                <option value="2000">1997</option>
                                <option value="2000">1996</option>
                                <option value="2000">1995</option>
                                <option value="2000">1994</option>
                                <option value="2000">1993</option>
                                <option value="2000">1992</option>
                                <option value="2000">1991</option>
                                <option value="2000">1990</option>
                                <option value="2000">1989</option>
                                <option value="2000">1988</option>
                            </select>
                        </div>
                        <div class="birth_day_select_item">
                            <select title="birth_year" class="my_select" name="birth_year">
                                <option value="Year" selected hidden>Month</option>
                                <option value="0">January</option>
                                <option value="1">February</option>
                                <option value="2">March</option>
                                <option value="3">April</option>
                                <option value="4">May</option>
                                <option value="5">June</option>
                                <option value="6">July</option>
                                <option value="7">August</option>
                                <option value="8">September</option>
                                <option value="9">October</option>
                                <option value="10">November</option>
                                <option value="11">December</option>
                            </select>
                        </div>
                        <div class="birth_day_select_item">
                            <select title="birth_year" class="my_select" name="birth_year">
                                <option value="Year" selected hidden>Day</option>
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                                <option value="6">7</option>
                                <option value="7">8</option>
                                <option value="8">9</option>
                                <option value="9">10</option>
                                <option value="10">11</option>
                                <option value="11">12</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form_errors_box">
                    <p>Error mail</p>
                </div>
                <input type="submit" value="Create New Quant Account">
                <p><a href="">Forgot Your Password?</a></p>
            </form>
            <form class="login_form" data-from_tab="register_form" data-tab_id="2">
                <input type="text" placeholder="E-mail" class="error_input">
                <input type="password" placeholder="Password">
                <input type="text" placeholder="Your First Name">
                <input type="text" placeholder="Your Last Name">
                <div class="with_title">
                    <p>Date of Birth</p>
                    <div class="birth_day_select">
                        <div class="birth_day_select_item">
                            <select title="birth_year" class="my_select" name="birth_year">
                                <option value="Year" selected hidden>Year</option>
                                <option value="2000">2000</option>
                                <option value="2000">1999</option>
                                <option value="2000">1998</option>
                                <option value="2000">1997</option>
                                <option value="2000">1996</option>
                                <option value="2000">1995</option>
                                <option value="2000">1994</option>
                                <option value="2000">1993</option>
                                <option value="2000">1992</option>
                                <option value="2000">1991</option>
                                <option value="2000">1990</option>
                                <option value="2000">1989</option>
                                <option value="2000">1988</option>
                            </select>
                        </div>
                        <div class="birth_day_select_item">
                            <select title="birth_year" class="my_select" name="birth_year">
                                <option value="Year" selected hidden>Month</option>
                                <option value="0">January</option>
                                <option value="1">February</option>
                                <option value="2">March</option>
                                <option value="3">April</option>
                                <option value="4">May</option>
                                <option value="5">June</option>
                                <option value="6">July</option>
                                <option value="7">August</option>
                                <option value="8">September</option>
                                <option value="9">October</option>
                                <option value="10">November</option>
                                <option value="11">December</option>
                            </select>
                        </div>
                        <div class="birth_day_select_item">
                            <select title="birth_year" class="my_select" name="birth_year">
                                <option value="Year" selected hidden>Day</option>
                                <option value="0">1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                                <option value="6">7</option>
                                <option value="7">8</option>
                                <option value="8">9</option>
                                <option value="9">10</option>
                                <option value="10">11</option>
                                <option value="11">12</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form_errors_box">
                    <p>Error mail</p>
                </div>
                <input type="submit" value="Create New Quant Account">
                <p><a href="">Forgot Your Password?</a></p>
            </form>
        </div>
        <a href="#login_popup" class="border_link"><span>Login</span></a>
    </div>
</div>

<div class="popup_wrapper" id="invest_popup">
    <div class="popup_inner invest_popup">
        <a href="" class="close_modal">Close</a>
        <h4>Investment</h4>
        <h6>The functional is under constructon</h6>
        <div class="invest_popup_body">
            <h5>AVAILABLE CURRENCIES</h5>
            <div class="invest_currency">
                <div class="invest_currency_item">
                    <div class="invest_currency_item_icon">
                        <img src="images/btc_icon.svg" alt="">
                    </div>
                    <p>BTC</p>
                </div>
                <div class="invest_currency_item">
                    <div class="invest_currency_item_icon">
                        <img src="images/eth_icon.svg" alt="">
                    </div>
                    <p>ETH</p>
                </div>
                <div class="invest_currency_item">
                    <div class="invest_currency_item_icon">
                        <img src="images/qnt_icon.svg" alt="">
                    </div>
                    <p>QNT</p>
                </div>
            </div>
        </div>

    </div>
</div>

<!--scripts-->
<script src="js/jquery-1.10.2.min.js"></script>
<!--css selectors on IE8-IE9-->
<script src="js/selectivizr-min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/app.js"></script>

