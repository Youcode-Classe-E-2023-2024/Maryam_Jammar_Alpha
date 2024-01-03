<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= ucfirst($page) ?></title>
    <link rel="stylesheet" href="<?= PATH ?>assets/css/style.css">
    <link rel="apple-touch-icon" sizes="76x76" href="<?= PATH ?>assets/img/apple-icon.png" />
    <link rel="icon" type="image/png" href="<?= PATH ?>assets/img/favicon.png" />

    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <!-- Nucleo Icons -->
    <link href="<?= PATH ?>assets/css/nucleo-icons.css" rel="stylesheet" />
    <link href="<?= PATH ?>assets/css/nucleo-svg.css" rel="stylesheet" />
    <!-- Main Styling -->
    <link href="<?= PATH ?>assets/css/argon-dashboard-tailwind.css?v=1.0.1" rel="stylesheet" />
</head>
<body>
<!--    <h1>--><?php //= ucfirst($page) ?><!-- View</h1>-->

    <main>
        <?php include_once 'views/' . $page . '_view.php'; ?>
    </main>

    <footer></footer>
    <script src="<?= PATH ?>assets/js/main.js"></script>
</body>
</html>