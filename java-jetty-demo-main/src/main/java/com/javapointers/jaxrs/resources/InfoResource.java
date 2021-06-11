package com.javapointers.jaxrs.resources;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
 
//routing to parent path localhost:8888/demo
@Path("/demo")
public class InfoResource {
 
    @POST
    @Path("/addnum")
    @Produces("application/json")
    
    //adding value 5 to the queryparam value passed by user
    public Response postinfo(@QueryParam("inputNum") int inputNum) {
    	int xx= inputNum+5;
    	String message = String.format("{“status”: “OK”, “result”: %d}", xx);
        return Response.ok(message).build();
    }
 
    @GET
    @Path("/display-status")
    @Consumes("application/json")
    @Produces("application/json")
    
  //displaying the status
    public Response getinfo() {
    	String message =  String.format("{“status”: “OK”}");
        return Response.ok(message).build();
    }
    }

