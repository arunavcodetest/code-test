using Nancy;
using Nancy.ModelBinding;
namespace NancyDemoApplication
{
    public class DemoApplication : NancyModule
    {
        public DemoApplication()
        {
            //Get Method to show status as OK
            Get("/", parameters =>
            {
                var test = new { Status = "OK"};
                return Response.AsJson(test);
            });

            //Post method to add a number 5 to the input value
            //Receiving value
            Post("/add", y =>
            {

                var name = Request.Query.name;

                //Creating object for class PostData
                PostData recievedData = this.Bind<PostData>();

                //Using the obeject to access the function in the class which performs the calculation
                recievedData.AddNo(name);

                //Returning the received data in Json format
                return Response.AsJson(new { Status = "Ok", Result = $"{recievedData.Data}" });
            });
        }
    }
    /* Class for computing the calculation*/
    public class PostData
    {
        public string Data { get; set; }
        public void AddNo(long X)
        {
            /* Calculating the sum*/
            Data = (X + 5).ToString();
        }
    }
}