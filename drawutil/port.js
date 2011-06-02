dojo.provide("drawutil.port");


dojo.require("dojox.gfx");

dojo.declare("drawutil.port",  null ,
{    
    surface             : "",
    side                : 10,
    x                   : 0,
    y                   : 0,

    constructor: function(args)
    {
        this.inherited(arguments);
        console.log("drawutil.port constructor. args are "+args);
        this.x = args.x;
        this.y = args.y;
        this.where = args.where;
        this.position = args.position;
        this.surface = args.surface;
        this.name = args.name;
    },
    
    remove: function()
    {
        console.log("drawutil.port "+this.name+" remove called..");
      if(this.avatar)
      {
        this.surface.remove(this.avatar);   
      }
    },
    
    render: function(x, y)
    {
        this.x = x;
        this.y = y;
        //console.log("drawutil.port "+this.name+" render called. x = "+x+", y = "+y);
        var rect = {x: x, y: y, width: this.side, height: this.side};
        //console.log("creating port with parameters..");
        //console.dir(rect);
        var red_rect = this.surface.createRect(rect);
        red_rect.setFill("#216278");
        red_rect.setStroke({color: "#3AAACF", width: 1}); 
        this.avatar = red_rect;
                
        dojo.connect(red_rect.getNode(), "onmouseover", this, this.mouseOver);
        dojo.connect(red_rect.getNode(), "onmouseout", this, this.mouseOut);
        
        //'this.surface.add(this.avatar);
    },
    
    mouseOver: function(e)
    {
        if(!this.drawLineEvent)
        {
            this.highlight();
            dojo.publish("port_highlight", [this]);   
        }
    },
    
    mouseOut: function(e)
    {
        this.lowlight(); 
        dojo.publish("port_highlight", [null]);
    },
    
    highlight: function()
    {
        this.avatar.setStroke({color: "yellow", width: 2});
    },
    
    lowlight: function()
    {
        this.avatar.setStroke({color: "green", width: 1});   
    }
    
    
});