<?php include 'header.php';?>

<div class="container-fluid">

    <div class="col-xs-12 col-md-12 col-lg-12">
        <ul class="breadcrumb">
            <li><a href="index.php">Home</a></li>
            <li>Chat</li>
        </ul>
    </div>

</div>

<div class="col-xs-12 col-md-12 col-lg-12">
    <div class="chatname">
        <h1>Pēteris
            <?php echo  date("Y/m/d") ; ?>
        </h1>
    </div>
</div>

<div class="col-xs-12 col-md-12 col-lg-12">
    xxx

</div>

<div class="col-xs-12 col-md-12 col-lg-12">

    <div>

        <label for="super-username">Username: </label> <br>

        <input type="text" id="super-user" name="username">

    </div>
    <br>
    <div>
    <label for="message">Message: </label> <br>
        <textarea name="" id="message" cols="100%" rows="10">   </textarea> <input type="submit" value="Send">
    </div>


</div>



<?php include 'footer.php';?>