using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApiV2.Models;

namespace TodoApiV2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemTest : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoItemTest(TodoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public  ActionResult<IEnumerable<TodoItem>> GetTodoItem()
        {
            return  _context.GetAllTodos();
        }
    }
}
