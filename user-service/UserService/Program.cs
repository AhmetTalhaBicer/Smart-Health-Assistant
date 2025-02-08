using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using UserService.src.Domain.Entities;
using UserService.src.Extansions;
using UserService.src.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddAuthorization();
builder.Services.AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme);
builder.Services.AddIdentityCore<User>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddApiEndpoints(); 

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    app.UseSwaggerUI(
        options =>
        {
            options.SwaggerEndpoint("/openapi/v1.json", "User Service API");
        });

    app.ApplyMigrations();
}

app.UseHttpsRedirection();
app.MapIdentityApi<User>();

// Add authentication and authorization middleware
app.UseAuthentication();
app.UseAuthorization();

app.Run();