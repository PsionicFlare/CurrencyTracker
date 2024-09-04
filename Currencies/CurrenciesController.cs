using Microsoft.AspNetCore.Mvc;

namespace StockCurrencyTracker.Currencies;

[ApiController]
[Route("api/[controller]")]
public class CurrenciesController : ControllerBase
{
    private readonly ILogger<CurrenciesController> _logger;

    public CurrenciesController(ILogger<CurrenciesController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Currency> Get()
    {
        return [
            new() { Name = "USD", Symbol = "$" }, 
            new() { Name = "EUR", Symbol = "€" }
        ];
    }
}
