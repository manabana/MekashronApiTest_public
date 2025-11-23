using Mekashron.Domain.Api;

namespace Mekashron.Domain.Repositories
{
    public interface IMekashronApiRepository
    {
        Task<MekashronLoginResponse> Login(LoginBlank blank);
        MekashronRegisterResponse RegisterNewCustomer(CustomerBlank blank);
    }
}
