<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>AltBit</title>

        <link href="//fonts.googleapis.com/css?family=Lato:100,300" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="/assets/css/app.css">
        @yield('styles')

        <!--[if lt IE 9]>
            <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-toggle="#navbar-menu">
                        <span class="sr-only">Toggle Nav</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">{{ config('app.title') }} Admin</a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-menu">
                    @include('admin.partials.navbar')
                </div>
            </div>
        </nav>
        @yield('content')
        <div class="container">
            <div class="content">
                <div class="title">AltBit</div>
                <div class="title-caption">Feeling lucky?</div>
            </div>
            <footer class="">
                <div class="caption">Coming Soon to AltBit.io</div>
            </footer>
        </div>
        <script src="{{ asset('/js/app.js') }}"></script>
    </body>
</html>
