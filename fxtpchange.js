
// I wrote this code blocks a long ago and sorry for the bad format.
// When i wrote i barely knew jquery
// Feel free to edit and use
// © Kalana Hettiarachchi
// https://www.linkedin.com/in/kalanahe/


        $(document).ready(function () {
            $("#district").change(function () {
                var mal = $(this).val();
                if (mal == "Ampara") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="063" autocomplete="off">');
                } else if (mal == "Anuradhapura") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="025" autocomplete="off">');
                } else if (mal == "Colombo") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="011" autocomplete="off">');
                } else if (mal == "Kalutara") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="034" autocomplete="off">');
                }
                 else if (mal == "Hambantota") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="047" autocomplete="off">');
                }
                 else if (mal == "Badulla") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="055" autocomplete="off">');
                }
                 else if (mal == "Batticaloa") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="065" autocomplete="off">');
                }
                else if (mal == "Galle") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="091" autocomplete="off">');
                }
                else if (mal == "Gampaha") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="033" autocomplete="off">');
                }
                else if (mal == "Jaffna") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="021" autocomplete="off">');
                }
                else if (mal == "Kandy") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="081" autocomplete="off">');
                }
                else if (mal == "Kegalle") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="035" autocomplete="off">');
                }
                else if (mal == "Kurunegala") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="037" autocomplete="off">');
                }
                else if (mal == "Mannar") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="023" autocomplete="off">');
                }
                else if (mal == "Matale") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="066" autocomplete="off">');
                }
                else if (mal == "Matara") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="041" autocomplete="off">');
                }
                else if (mal == "Ratnapura") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="045" autocomplete="off">');
                }
                else if (mal == "Trincomalee") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="026" autocomplete="off">');
                }
                else if (mal == "Vavuniya") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="024" autocomplete="off">');
                }
                else if (mal == "Puttalam") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="032" autocomplete="off">');
                }
                else if (mal == "Polonnaruwa") {
                    $("#fxtpi").html('<input type="text" class="form-control" name="fxtp" id="fxtp" value="027" autocomplete="off">');
                }
                
            });
        });
