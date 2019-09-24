function redir(to){
    let url = "http://"+window.location.host+"/Portfolio"+to;
    window.location.href = url;
}

function load(){
    $('body').prepend(`    <div class="rectangle left-50" style="top: 50px;" id="page-selector-parent">
        <div class="rectangle center-horizontal" id="page-selector-container">
            <div class="button-0 button-0-mobile square" id="page-selector-home-page" onclick="redir('/')"><br>Home</div>
            <div class="button-0 button-0-mobile square" id="page-selector-about-page" onclick="redir('/about/')"><br>About</div>
            <div class="button-0 button-0-mobile square" id="page-selector-projects-page" onclick="redir('/projects/')"><br>Projects</div>
            <div class="button-0 button-0-mobile square" id="page-selector-contact-page" onclick="redir('/contact/')"><br>Contact</div>
        </div>
    </div>
`);
}

$(document).ready(load);

