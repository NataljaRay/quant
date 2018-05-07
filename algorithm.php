<!DOCTYPE html>
<html lang="ru-RU">
<head>
    <?php include "header.php";?>
    <title>QUANTOR</title>
</head>
<body>
<div class="main_wrap">
    <?php require "header_top.php";?>
    <main>
        <div class="container">
            <div class="main">
                <div class="algorithm_inner">
                    <h4>Standatd MACD strategy</h4>
                    <p>by <a href="">Quantor Platform Official</a></p>
                    <h6>Original Gekko MACD strategy for algorithm backtesting alpha-test purposes</h6>
                    <div class="algorithm_graphic_box">
                        <div class="algorithm_graphic_body">
                            <h5>Pro Strategy</h5>
                            <div class="algorithm_graphic">
                                <img src="img/graphic_full.jpg" alt="">
                            </div>
                        </div>
                        <div class="algorithm_info">
                            <h5>Backtest Report</h5>
                            <div class="algorithm_info_numbers">
                                <div class="algorithm_numbers">
                                    <div class="algorithm_number">
                                        <p>-20%</p>
                                        <span>RETURN</span>
                                    </div>
                                    <div class="algorithm_number">
                                        <p>5%</p>
                                        <span>DRAWDOWN</span>
                                    </div>
                                    <div class="algorithm_number">
                                        <p>1.5</p>
                                        <span>RATIO</span>
                                    </div>
                                    <div class="algorithm_number">
                                        <p>1.5</p>
                                        <span>SHARPE RATIO</span>
                                    </div>
                                    <div class="algorithm_number">
                                        <p>435</p>
                                        <span>TOTAL TRADES</span>
                                    </div>
                                </div>
                                <a href="#invest_popup" class="page_btn get_modal"><span>Invest</span></a>
                            </div>
                        </div>
                    </div>
                    <h5>Deal Story </h5>
                    <table class="my_table">
                        <thead>
                        <tr>
                            <th>OPEN ORDER (UTC)</th>
                            <th>CLOSED ORDER (UTC)</th>
                            <th>EXPOSURE</th>
                            <th>ENTRY BALANCE</th>
                            <th>EXIT BALANCE</th>
                            <th>P&L</th>
                            <th>PROFIT, %</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>January 11, 2017</td>
                            <td>January 11, 2017</td>
                            <td>8 hours</td>
                            <td>1024.7</td>
                            <td>893.002</td>
                            <td>131.7</td>
                            <td>- 12.85</td>
                        </tr>
                        <tr>
                            <td>January 12, 2017</td>
                            <td>January 11, 2017</td>
                            <td>6 days</td>
                            <td>888.108</td>
                            <td>954.522</td>
                            <td>66.41</td>
                            <td>7.48</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
    <?php require "footer.php";?>
</div>
</body>
</html>