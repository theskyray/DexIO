$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("tipos", "tipos");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "tipos";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'tipo planta');
        comp_comp1.code = '<img src="img/tipo_planta.png" width="100" />';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'tipo veneno');
        comp_comp2.code = '<img src="img/tipo_veneno.png" width="100" class="pull-right" />';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("tipos_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});