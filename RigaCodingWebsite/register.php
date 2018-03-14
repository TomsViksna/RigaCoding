<?php include 'header.php';?>



<div class="row">

    <div class="col-xs-12 col-md-12 col-lg-12">
        <ul class="breadcrumb">
            <li><a href="index.php">Home</a></li>
            <li>Register</li>
        </ul>
    </div>
</div>

    </row>

    <div class="row">

        <div class="col-xs-12 col-md-12 col-lg-12 text-center">

            <form>
                <div>

                    <label for="super-username"></label> <br>

                    <input type="text" id="super-user" name="username" placeholder="Username*" required>

                </div>

                <div>
                <label for="super-password"></label> <br>

                <input type="password" id="super-password" name="password" placeholder="Password*" required>
                </div>

                <div>
                <label for="retype-password"></label> <br>

                <input type="password" id="retype-password" name="password" placeholder="Retype password*" required>
                </div>

                <div>

                    <label for="firstname"></label> <br>

                    <input type="text" id="firstname" name="firstname" placeholder="First name*" required>

                </div>

                <div>

                    <label for="lastname"></label> <br>

                    <input type="text" id="lastname" name="lastname" placeholder="Last name" required>

                </div>
<br>



                <div>
                    <textarea name="" id="" cols="30" rows="10" required></textarea>
                </div>

                <div>
                    <select required>
                <option value="">Latvia</option>
                <option value="">Estonia</option>
                <option value="">Lithunia</option>
           
        </select>

                </div>

                <div>
                    <input type="checkbox" id="checkbox1"> <label for="checkbox1">I agree with terms and conditions*</label><br>
            
                    
                </div>

                <div>
                    <input type="submit" value="Register!">

                </div>




            </form>

        </div>
    </div>

</div>





<?php include 'footer.php';?>