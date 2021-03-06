define(
    [
        "dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/text!./editor.html",
        "dojo/dom-style",
        "dojo/_base/fx",
        "dojo/_base/lang",
        "dojox/gfx",

    ],
    function(declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin,
             template, domStyle, baseFx, lang, gfx)
    {
        return declare([],
            {
	
    model       : "", // The model containinb properties for the
    // things being drawn
    // Minimum model properties are; {x:0 , y:0, height: 100, width: 100}  .
   
    
    constructor: function(args)
    {
        //console.log("boxgraph.base constructor called..");
        try
        {
        this.model = args.model;
        this.surface = args.surface;
        }
        catch(e)
        {
         console.log("WTF!!!! ** box without arguments eh??!! : "+e);
         throw("WTF!!");
        }
    },
    
    /*
    The p argument is an object literal which looks like this;
    {
        ratio: 10,
        where: "xxxx"
    }
    
    The where property is a cue for the respective entity where to put
     the port, like "right" for the right side of a rectangular block
    The ratio property tells how far out from 'where' the port is to be placed.
    */
    addPort: function(p)
    {
        this.ports.push(p);
    },
    
    removePort: function(p)
    {
        
    }

    })

})
