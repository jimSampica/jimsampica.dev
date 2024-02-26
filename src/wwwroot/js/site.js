var cli = $('#console-input');

setTimeout(() => cli.val("h"), 2000);
setTimeout(() => cli.val(cli.val() + "e"), 2500);
setTimeout(() => cli.val(cli.val() + "l"), 3000);
setTimeout(() => cli.val(cli.val() + "p"), 3500);
setTimeout(() => cli.trigger($.Event( "keydown", { which: 13 } )), 4000);


// User Commands
function echo(...a) {
    return a.join(' ');
}
echo.usage = "echo arg [arg ...]";
echo.doc = "Echos to output whatever arguments are input";

var cmds = {
    goto,
    contact,
    echo,
    clear,
    help
};

/*
 * * * * * * * * USER INTERFACE * * * * * * *
 */

function clear() {
    $("#outputs").html("");
}
clear.usage = "clear";
clear.doc = "Clears the terminal screen and displays the introduction.";

function help(cmd) {
    if (cmd) {
        let result = "";
        let usage = cmds[cmd].usage;
        let doc = cmds[cmd].doc;
        result += (typeof usage === 'function') ? usage() : usage;
        result += "\n";
        result += (typeof doc === 'function') ? doc() : doc;
        return result;
    } else {
        let result = "**Commands:**\n\n";
        print = Object.keys(cmds);
        for (let p of print) {
            result += "- " + p + "\n";
        }
        return result;
    }
}
help.usage = () => "help [command]";
help.doc = () => "Without an argument, lists available commands. If used with an argument displays the usage & docs for the command.";

function contact(){

}
contact.usage = () => "help [command]";
contact.doc = () => "Without an argument, lists available commands. If used with an argument displays the usage & docs for the command.";

function goto(cmd) {
    let places = [
        { text: "1.Github", url: "https://github.com/jamesSampica" },
        { text: "2.StackOverflow", url: "https://stackoverflow.com/users/1950321/james-sampica" },
        { text: "3.LinkedIn", url: "https://www.linkedin.com/in/jamessampica/" },
        { text: "4.Twitter", url: "https://twitter.com/JamesSampica" }
    ]
    if (cmd) {
        window.open(places[cmd].url);
        return `Going to ${places[cmd].url}...`;
    }
    else {
        
        return `Check me out elsewhere...\n\n${places.map(p => `${p.text} (${p.url})`).join("\n")}`;
    }
}
goto.usage = () => "goto 1";
goto.doc = () => "Without an argument, lists available places to go to. If used with an argument a new window is opened that goes to the relevant place.";

// Set Focus to Input
$('.console').click(function () {
    cli.focus();
})

// Display input to Console
function input() {
    var cmd = cli.val();
    $("#outputs").append("<div class='output-cmd'>" + cmd + "</div>")
    cli.val("");
    autosize.update($('textarea'));
    $("html, body").animate({
        scrollTop: $(document).height()
    }, 300);
    return cmd;
}

// Output to Console
function output(print) {
    if (!window.md) {
        window.md = window.markdownit({
            linkify: true,
            breaks: true
        });
    }
    $("#outputs").append(window.md.render(print));
    $(".console").scrollTop($('.console-inner').height());
}

// Break Value
var newLine = "<br/> &nbsp;";

autosize($('textarea'));

var cmdHistory = [];
var cursor = -1;

// Get User Command
cli.on('keydown', function (event) {
    if (event.which === 38) {
        // Up Arrow
        cursor = Math.min(++cursor, cmdHistory.length - 1);
        cli.val(cmdHistory[cursor]);
    } else if (event.which === 40) {
        // Down Arrow
        cursor = Math.max(--cursor, -1)
        if (cursor === -1) {
            cli.val('');
        } else {
            cli.val(cmdHistory[cursor]);
        }
    } else if (event.which === 13) {
        event.preventDefault();
        cursor = -1;
        let text = input();
        let args = getTokens(text)[0];
        let cmd = args.shift().value;
        args = args.filter(x => x.type !== 'whitespace').map(x => x.value);
        cmdHistory.unshift(text);
        if (typeof cmds[cmd] === 'function') {
            let result = cmds[cmd](...args);
            if (result === void (0)) {
                // output nothing
            } else if (result instanceof Promise) {
                result.then(output);
            } else {
                output(result);
            }
        } else if (cmd.trim() === '') {
            output('');
        } else {
            output("Command not found: `" + cmd + "`");
            output("Use 'help' for list of commands.");
        }
    }
});