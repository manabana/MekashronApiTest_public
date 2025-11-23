using Mekashron.Domain.Repositories;
using Mekashron.Domain.Services;
using Mekashron.Repository.MekashronAPI;
using Mekashron.Services.Login;
using Microsoft.Extensions.FileProviders;

namespace Mekashron.Frontend
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddOpenApi();

            // внедрение HttpClient через Dependency Injection, чтобы использовать в репозитории
            String? mekashronBaseUrl = builder.Configuration["MekashronApi:BaseUrl"];
            if (mekashronBaseUrl is null) 
                throw new Exception("MekashronAPI:BaseURL в appsettings.json не указан или указан некорректно");
            builder.Services.AddHttpClient("MekashronApi", client =>
                {
                    client.BaseAddress = new Uri(mekashronBaseUrl);
                }
            );

            #region Services

            builder.Services.AddScoped<IMekashronApiService, MekashronApiService>();
            builder.Services.AddScoped<IMekashronApiRepository, MekashronApiRepository>();

            #endregion

            WebApplication app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            var distPath = Path.Combine(builder.Environment.WebRootPath, "dist");

            app.UseDefaultFiles(new DefaultFilesOptions
            {
                FileProvider = new PhysicalFileProvider(distPath),
                DefaultFileNames = new List<string> { "index.html" }
            });

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(distPath),
                RequestPath = ""
            });

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllers();

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}
