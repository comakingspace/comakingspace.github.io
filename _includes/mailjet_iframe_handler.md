<script type="text/javascript" src="/assets/js/mailjet_iframe_handler.js"></script>


<div class="iframe-container" id="iframe-container">
    <p>{{include.text}}</p>
    <button onClick="loadMailjetIframe('{{include.url}}', '{{include.css_class}}')" id="load-iframe-button" class="space-button">{{include.button_text}}</button>
</div>

<!-- <script type="text/javascript">
//    document.getElementById("load-iframe-button").addEventListener("click", function() {
//        loadIframe('{{include.url}}', '{{include.css_class}}');
//    });

</script> -->

