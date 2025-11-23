using Mekashron.Domain;
using Mekashron.Domain.Api;
using Mekashron.Domain.Services;
using Mekashron.Tools;
using Microsoft.AspNetCore.Mvc;

namespace Mekashron.Frontend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MekashronAuthController : ControllerBase
    {
        readonly IMekashronApiService _mekashronApiService;

        public MekashronAuthController(IMekashronApiService mekashronApiService)
        {
            _mekashronApiService = mekashronApiService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<MekashronLoginResponse>> LoginUser([FromBody] LoginBlank loginBlank)
        {
            if (loginBlank is null) return BadRequest("loginBlank is null");

            Result<MekashronLoginResponse> result = await _mekashronApiService.Login(loginBlank);
            if (!result.IsSuccess) return BadRequest(result.Error!.Message);

            MekashronLoginResponse response = result.Value!;
            return Ok(response);
        }
    }
}
