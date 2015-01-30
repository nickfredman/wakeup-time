$(document).on('ready', function() {
    var outerShell = $('<div class="outer-shell"></div>');
    var innerShell = $('<div class="inner-shell"><p class="pm">PM</p><p class="auto">AUTO</p></div>');
    var leftLabels = $('<div class="left-labels"></div>');
    var clockScreen = $('<div class="clock-screen"></div>');
    var clockIndicator = $('<div class="clock-indicator"></div>');
    var clockText = $('<div class="clock-text"><span>12:00<span></div>');
    var bottomAM = $('<div class="bottom-am"></div>');
    var bottomFM = $('<div class="bottom-fm"></div>');
    var bottomSlider = $('<div class="slider"></div>');


    $('.container').append(outerShell);
    outerShell.append(innerShell);
    innerShell.append(leftLabels)
        .append(clockScreen)
        .append(bottomAM)
        .append(bottomFM)
        .append(bottomSlider);
    clockScreen.append(clockIndicator)
        .append(clockText);

    bottomAM.append('<p>AM    53  60  70  90  110  140  170  KHz</p>');
    bottomFM.append('<p>FM    88  92  96  102  106  108    MHz</p>');
    bottomSlider.append('<div></div>')

});

        // .append(<div class="slider"></div>);