using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApiV2.Models
{
    public class TodoContext
    {
        public string ConnectionString { get; set; }

        public TodoContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public  List<TodoItem> GetAllTodos()
        {
            List<TodoItem> list = new List<TodoItem>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from todoItem", conn);

                using (var reader =  cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new TodoItem()
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            Name = reader["name"].ToString(),
                            IsComplete = Convert.ToBoolean(reader["isComplete"]),
                        });
                    }
                }
            }
            return list;
        }
    }
}
