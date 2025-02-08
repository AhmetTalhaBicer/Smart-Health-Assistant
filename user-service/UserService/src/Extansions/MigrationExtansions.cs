using Microsoft.EntityFrameworkCore;
using UserService.src.Infrastructure.Data;

namespace UserService.src.Extansions
{
    public static class MigrationExtansions
    {
        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            var serviceScopeFactory = app.ApplicationServices.GetService<IServiceScopeFactory>();
            if (serviceScopeFactory == null)
            {
                throw new InvalidOperationException("IServiceScopeFactory is not available.");
            }

            using var serviceScope = serviceScopeFactory.CreateScope();
            var context = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            context.Database.Migrate();
        }
    }
}