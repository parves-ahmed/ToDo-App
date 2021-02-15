using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoApiV2.Models;

namespace TodoApiV2.Data
{
    public class TodoApiV2Context : DbContext
    {
        public TodoApiV2Context (DbContextOptions<TodoApiV2Context> options)
            : base(options)
        {
        }

        public DbSet<TodoApiV2.Models.TodoItem> TodoItem { get; set; }
    }
}
