//Fonction de tri et d'ajout des joueurs dans les groupes prealablement selectionnés
$("#TabAdd").click(function () {

    //Fonction d'ajout au Tableau Groupe A
    if ($('#selectGrp').val() === 'GrpGroupA') {


        var TabGroupA = document.getElementById("TabGroupA");

        var rowGroupA = document.getElementById("TabGroupA").insertRow(-1);


        var ColGroupAClass = rowGroupA.insertCell(0);
        ColGroupAClass.innerHTML += document.getElementById("selectClass").value + '<span> </span>' + document.getElementById("selectRole").value;

        var ColGroupAPreci = rowGroupA.insertCell(1);

        if ($('#selectLeader').val() === 'Team Leader') {
            ColGroupAPreci.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectLeader").value + '</span> ';
        } else {
            ColGroupAPreci.innerHTML += '<span></span>';
        }
        if ($('#selectUnderDevo').val() === 'A Devo') {
            ColGroupAPreci.innerHTML += '<span class="tag is-link">' + document.getElementById("selectUnderDevo").value + '</span> ';
        } else {
            ColGroupAPreci.innerHTML += '<span></span>';
        }
        if ($('#selectFCP').val() === 'FCP') {
            ColGroupAPreci.innerHTML += '<span class="tag is-warning">' + document.getElementById("selectFCP").value + '</span>';
        } else {
            ColGroupAPreci.innerHTML += '<span></span>';
        }
        var ColGroupAPseudo = rowGroupA.insertCell(2);
        ColGroupAPseudo.innerHTML += document.getElementById("champPseudo").value;

        var ColGroupACom = rowGroupA.insertCell(3);
        ColGroupACom.innerHTML += document.getElementById("champCom").value;

        var ColGroupAConfirm = rowGroupA.insertCell(4);

        if ($('#selectConfirm').val() === 'Present') {
            ColGroupAConfirm.innerHTML += '<span class="tag is-success">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupA').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();



        } else if ($('#selectConfirm').val() === 'Absent') {
            ColGroupAConfirm.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupA').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();


        } else {
            ColGroupAConfirm.innerHTML += '<span class="tag is-dark">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupA').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();


        }

        //Fonction d'ajout au Tableau Groupe B
    } else if ($('#selectGrp').val() === 'GrpGroupB') {
        var TabGroupB = document.getElementById("TabGroupB");

        var rowGroupB = document.getElementById("TabGroupB").insertRow(-1);

        var ColGroupBClass = rowGroupB.insertCell(0);
        ColGroupBClass.innerHTML += document.getElementById("selectClass").value + '<span> </span>' + document.getElementById("selectRole").value;

        var ColGroupBPreci = rowGroupB.insertCell(1);

        if ($('#selectLeader').val() === 'Team Leader') {
            ColGroupBPreci.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectLeader").value + '</span> ';
        } else {
            ColGroupBPreci.innerHTML += '<span></span>';
        }
        if ($('#selectUnderDevo').val() === 'A Devo') {
            ColGroupBPreci.innerHTML += '<span class="tag is-link">' + document.getElementById("selectUnderDevo").value + '</span> ';
        } else {
            ColGroupBPreci.innerHTML += '<span></span>';
        }
        if ($('#selectFCP').val() === 'FCP') {
            ColGroupBPreci.innerHTML += '<span class="tag is-warning">' + document.getElementById("selectFCP").value + '</span>';
        } else {
            ColGroupBPreci.innerHTML += '<span></span>';
        }
        var ColGroupBPseudo = rowGroupB.insertCell(2);
        ColGroupBPseudo.innerHTML += document.getElementById("champPseudo").value;

        var ColGroupBCom = rowGroupB.insertCell(3);
        ColGroupBCom.innerHTML += document.getElementById("champCom").value;

        var ColGroupBConfirm = rowGroupB.insertCell(4);

        if ($('#selectConfirm').val() === 'Present') {
            ColGroupBConfirm.innerHTML += '<span class="tag is-success">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupB').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();



        } else if ($('#selectConfirm').val() === 'Absent') {
            ColGroupBConfirm.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupB').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();


        } else {
            ColGroupBConfirm.innerHTML += '<span class="tag is-dark">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupB').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();


        }
        //Fonction d'ajout au Tableau Groupe C
    } else if ($('#selectGrp').val() === 'GrpGroupC') {
        var TabGroupC = document.getElementById("TabGroupC");

        var rowGroupC = document.getElementById("TabGroupC").insertRow(-1);

        var ColGroupCClass = rowGroupC.insertCell(0);
        ColGroupCClass.innerHTML += document.getElementById("selectClass").value + '<span> </span>' + document.getElementById("selectRole").value;

        var ColGroupCPreci = rowGroupC.insertCell(1);

        if ($('#selectLeader').val() === 'Team Leader') {
            ColGroupCPreci.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectLeader").value + '</span> ';
        } else {
            ColGroupCPreci.innerHTML += '<span></span>';
        }
        if ($('#selectUnderDevo').val() === 'A Devo') {
            ColGroupCPreci.innerHTML += '<span class="tag is-link">' + document.getElementById("selectUnderDevo").value + '</span> ';
        } else {
            ColGroupCPreci.innerHTML += '<span></span>';
        }
        if ($('#selectFCP').val() === 'FCP') {
            ColGroupCPreci.innerHTML += '<span class="tag is-warning">' + document.getElementById("selectFCP").value + '</span>';
        } else {
            ColGroupCPreci.innerHTML += '<span></span>';
        }
        var ColGroupCPseudo = rowGroupC.insertCell(2);
        ColGroupCPseudo.innerHTML += document.getElementById("champPseudo").value;

        var ColGroupCCom = rowGroupC.insertCell(3);
        ColGroupCCom.innerHTML += document.getElementById("champCom").value;

        var ColGroupCConfirm = rowGroupC.insertCell(4);

        if ($('#selectConfirm').val() === 'Present') {
            ColGroupCConfirm.innerHTML += '<span class="tag is-success">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupC').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();

        } else if ($('#selectConfirm').val() === 'Absent') {
            ColGroupCConfirm.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupC').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();

        } else {
            ColGroupCConfirm.innerHTML += '<span class="tag is-dark">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupC').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();

        }
        //Fonction d'ajout au Tableau Groupe D
    } else if ($('#selectGrp').val() === 'GrpGroupD') {
        var TabGroupD = document.getElementById("TabGroupD");

        var rowGroupD = document.getElementById("TabGroupD").insertRow(-1);

        var ColGroupDClass = rowGroupD.insertCell(0);
        ColGroupDClass.innerHTML += document.getElementById("selectClass").value + '<span> </span>' + document.getElementById("selectRole").value;

        var ColGroupDPreci = rowGroupD.insertCell(1);

        if ($('#selectLeader').val() === 'Team Leader') {
            ColGroupDPreci.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectLeader").value + '</span> ';
        } else {
            ColGroupDPreci.innerHTML += '<span></span>';
        }
        if ($('#selectUnderDevo').val() === 'A Devo') {
            ColGroupDPreci.innerHTML += '<span class="tag is-link">' + document.getElementById("selectUnderDevo").value + '</span> ';
        } else {
            ColGroupDPreci.innerHTML += '<span></span>';
        }
        if ($('#selectFCP').val() === 'FCP') {
            ColGroupDPreci.innerHTML += '<span class="tag is-warning">' + document.getElementById("selectFCP").value + '</span>';
        } else {
            ColGroupDPreci.innerHTML += '<span></span>';
        }
        var ColGroupDPseudo = rowGroupD.insertCell(2);
        ColGroupDPseudo.innerHTML += document.getElementById("champPseudo").value;

        var ColGroupDCom = rowGroupD.insertCell(3);
        ColGroupDCom.innerHTML += document.getElementById("champCom").value;

        var ColGroupDConfirm = rowGroupD.insertCell(4);

        if ($('#selectConfirm').val() === 'Present') {
            ColGroupDConfirm.innerHTML += '<span class="tag is-success">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupD').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();


        } else if ($('#selectConfirm').val() === 'Absent') {
            ColGroupDConfirm.innerHTML += '<span class="tag is-danger">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupD').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();

        } else {
            ColGroupDConfirm.innerHTML += '<span class="tag is-dark">' + document.getElementById("selectConfirm").value + '</span>';

            $('#notifySuccessGroupD').fadeIn().delay(2000).fadeOut();
            $('#selectClass').attr('disabled', '');
            $('#selectRole').attr('disabled', '');
            $('#selectLeader').attr('disabled', '');
            $('#selectUnderDevo').attr('disabled', '');
            $('#selectFCP').attr('disabled', '');
            $('#selectConfirm').attr('disabled', '');
            $('#TabAdd').attr('disabled', '');
            $("#Group").get(0).reset();
            $("#Class").get(0).reset();
            $("#Role").get(0).reset();
            $("#Lead").get(0).reset();
            $("#UnderDevo").get(0).reset();
            $("#FCP").get(0).reset();
            $("#Pseudo").get(0).reset();
            $("#Comment").get(0).reset();
            $("#Confirm").get(0).reset();
            $("#Stage1").hide();
            $("#Stage2").hide();
            $("#Stage3").hide();
            $("#Stage4").hide();
            $("#Stage5").hide();
            $("#Stage5bis").hide();
            $("#Stage6").hide();

        }
    } else {
        alert('Error')
    }

});
