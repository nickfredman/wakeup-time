$(document).on('ready', function() {
    var outerShell = $('<div class="outer-shell"></div>');
    var innerShell = $('<div class="inner-shell"><p>PM</p><p><AUTO</p></div>');
    var leftLabels = $('<div class="left-labels"></div>');
    var clockScreen = $('<div class="clock-screen"></div>');
    var clockIndicator = $('<div class="clock-indicator"></div>');
    var clockText = $('<div class="clock-text"><span>12:00<span></div>');
    var bottomAM = $('<div class="bottom-am"></div>');
    var bottomFM = $('<div class="bottom-fm"></div>');

    $('.container').append(outerShell);
    outerShell.append(innerShell);
    innerShell.append(leftLabels)
        .append(clockScreen)
        .append(bottomAM)
        .append(bottomFM);
    clockScreen.append(clockIndicator)
        .append(clockText);

});