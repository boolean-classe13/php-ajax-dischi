<?php include '../database/dischi.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>PHP dischi</title>
        <link rel="stylesheet" href="../public/css/app.css">
    </head>
    <body>
        <header>
            <div class="container">
                <h1>PHP DISCHI</h1>
            </div>
        </header>
        <div class="container">
            <div id="lista-dischi" data-is-ajax="0">
                <?php foreach ($dischi as $disco) { ?>
                    <div class="card-disco">
                        <img src="<?php echo $disco['poster']; ?>" alt="<?php echo 'copertina ' . $disco['title']; ?>">
                        <strong><?php echo $disco['title']; ?></strong>
                        <p><?php echo $disco['author']; ?></p>
                        <small><?php echo $disco['year'] ?></small>
                    </div>
                    <?php
                } ?>
            </div>
        </div>
        <script src="../public/js/app.js" charset="utf-8"></script>
    </body>
</html>
