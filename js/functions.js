//Fonction de d'affichage et de masquage automatique des bandeaux d'information et des sections
$(document).ready(function () {
    $('#notifyWarning').fadeIn().delay(3000).fadeOut();
    $(".hidden").hide();
    $("#Stage1").hide();
    $("#Stage2").hide();
    $("#Stage3").hide();
    $("#Stage4").hide();
    $("#Stage5").hide();
    $("#Stage5bis").hide();
    $("#Stage6").hide();
    $("#RosterTab").hide();
});

//Selon la class choisie, les roles affichés changent
$("#selectClass").change(function () {
    $("#selectRole").load("./roledata/" + $(this).val() + ".role");


});


//Fonction pour switcher entre la section des tableaux et la section du Roster Creator
$("#TabLink").click(function () {
    TabLink.classList.add("is-active");
CreateLink.classList.remove("is-active");
    $("#RosterCreator").fadeOut("slow", function () {
        $("#RosterTab").fadeIn("slow");
    });
});
$("#CreateLink").click(function () {
        CreateLink.classList.add("is-active");
TabLink.classList.remove("is-active");
    $("#RosterTab").fadeOut("slow", function () {
        $("#RosterCreator").fadeIn("slow");
    });

});

//Fonction Secrete d'acces au dark theme
$(function () {
    var kKeys = [];

    function Kpress(e) {
        kKeys.push(e.keyCode);
        if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
            $(this).unbind('keydown', Kpress);
            kExec();
        }
    }
    $(document).keydown(Kpress);
});

function kExec() {
    window.open("dark.html", "_self");
}

//Fonction de conversion tableaux en image
$("#rosterPrint").click(function () {
    var el = document.getElementById("RosterTab"),
        WinPrint = window.open('', '', 'letf=0,top=0');
    WinPrint.document.write(el.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
});

/*Bouton de Suppression de ligne*/
