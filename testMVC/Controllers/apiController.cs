﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace testMVC.Controllers
{
    public class apiController : ApiController
    {
        // GET: api/api
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/api/5
        public string Get(int id)
        {
            //var data = "You gave me a " + id;
            //return data;
            return "value";
        }

        // POST: api/api
        public void Post([FromBody]string value)
        {
        
        }

        // PUT: api/api/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/api/5
        public void Delete(int id)
        {
        }
    }
}
