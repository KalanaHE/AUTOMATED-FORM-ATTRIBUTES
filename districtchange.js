
// I wrote this code blocks a long ago and sorry for the bad format.
// When i wrote i barely knew jquery
// Feel free to edit and use
// © Kalana Hettiarachchi
// https://www.linkedin.com/in/kalanahe/


$(document).ready(function () {
            $("#province").change(function () {
                var val = $(this).val();
                if (val == "Western") {
                    $("#district").html("<option value=''></option><option value='Colombo'>Colombo</option><option value='Gampaha'>Gampaha</option><option value='Kalutara'>Kalutara</option>");
                } else if (val == "Eastern") {
                    $("#district").html("<option value=''></option><option value='Trincomalee'>Trincomalee</option><option value='Ampara'>Ampara</option><option value='Batticaloa'>Batticaloa</option>");
                } else if (val == "Central") {
                    $("#district").html("<option value=''></option><option value='Matale'>Matale</option><option value='Kandy'>Kandy</option><option value='Nuwara Eliya'>Nuwara Eliya</option>");
                } else if (val == "North Central") {
                    $("#district").html("<option value=''></option><option value='Anuradhapura'>Anuradhapura</option><option value='Polonnaruwa'>Polonnaruwa</option>");
                }
                 else if (val == "Northern") {
                    $("#district").html("<option value=''></option><option value='Jaffna'>Jaffna</option><option value='Kilinochchi'>Kilinochchi</option><option value='Mannar'>Mannar</option><option value='Mullaitivu'>Mullaitivu</option><option value='Vavuniya'>Vavuniya</option>");
                }
                 else if (val == "North Western") {
                    $("#district").html("<option value=''></option><option value='Puttalam'>Puttalam</option><option value='Kurunegala'>Kurunegala</option>");
                }
                 else if (val == "Sabaragamuwa") {
                    $("#district").html("<option value=''></option><option value='Kegalle'>Kegalle</option><option value='Ratnapura'>Ratnapura</option>");
                }
                else if (val == "Southern") {
                    $("#district").html("<option value=''></option><option value='Galle'>Galle</option><option value='Matara'>Matara</option><option value='Hambantota'>Hambantota</option>");
                }
                else if (val == "Uva") {
                    $("#district").html("<option value=''></option><option value='Badulla'>Badulla</option><option value='Monaragala'>Monaragala</option>");
                }
                
            });
        });