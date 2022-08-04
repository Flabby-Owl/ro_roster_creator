//le Formulaire Classe est disponible seulement si le Groupe a été selectionné
$("#selectGrp").change(function () {
    if ($('#selectGrp').val() === 'none') {

        $('#selectClass').attr('disabled', '');
    } else {
        $('#selectClass').removeAttr('disabled');
        $("#Stage1").fadeIn("slow");
    }
});

//le Formulaire Role est disponible seulement si la Classe a été selectionné
$("#selectClass").change(function () {
    if ($('#selectClass').val() === 'none') {

        $('#selectRole').attr('disabled', '');
    } else {
        $('#selectRole').removeAttr('disabled');
    }
});

//le Formulaire Team-Leader est disponible seulement si le Role a été selectionné a été selectionné
$("#selectRole").change(function () {
    if ($('#selectRole').val() === 'none') {

        $('#selectLeader').attr('disabled', '');
    } else {
        $('#selectLeader').removeAttr('disabled');
        $("#Stage2").fadeIn("slow");
    }
});

//le Formulaire Devotion est disponible seulement si le Lead a été selectionné
$("#selectLeader").change(function () {
    if ($('#selectLeader').val() === 'none') {

        $('#selectUnderDevo').attr('disabled', '');
    } else {
        $('#selectUnderDevo').removeAttr('disabled');
    }
});
//le Formulaire FCP est disponible seulement si la classe est un Creator
$("#selectClass").change(function () {
    if ($('#selectClass').val() === 'Creator') {
        $('#selectFCP').removeAttr('disabled');
    } else {
        $('#selectFCP').attr('disabled', '');
        $("#FCP").get(0).reset();
    }
});


//le Formulaire Pseudo est disponible seulement si le Devotion a été selectionné
$("#selectUnderDevo").change(function () {
    if ($('#selectUnderDevo').val() === 'none') {

        $('#champPseudo').attr('disabled', '');
    } else {
        $('#champPseudo').removeAttr('disabled');
        $("#Stage3").fadeIn("slow");
    }
});

//Les formulaires Precisions et Confirmer sont disponibles seulement si le formulaire pseudo est rempli
$('#champPseudo').keyup(function () {
    if ($(this).val() == '') {
        $('#champCom').attr('disabled', '');
        $('#selectConfirm').attr('disabled', '');
    } else {
        $('#champCom').removeAttr('disabled');
        $('#selectConfirm').removeAttr('disabled');
        $("#Stage4").fadeIn("slow");
    }
});

$('#champCom').keyup(function () {
    if ($(this).val() == '') {
        $("#Stage5bis").fadeIn("slow");
        $("#Stage5").hide();
    } else {
        $("#Stage5").fadeIn("slow");
        $("#Stage5bis").hide();
    }
});

//le Bouton d'ajout est disponible seulement si une option a été selectionnée dans le menu de confirmation
$("#selectConfirm").change(function () {
    if ($('#selectConfirm').val() === 'none') {

    } else {
        $('#TabAdd').removeAttr('disabled');
        $("#Stage6").fadeIn("slow");
    }
});
