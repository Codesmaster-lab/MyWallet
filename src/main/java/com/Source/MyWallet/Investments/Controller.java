package com.Source.MyWallet.Investments;

import com.fasterxml.jackson.annotation.JsonAlias;
import jdk.nashorn.api.tree.FunctionDeclarationTree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
public class Controller {

    private final Service FundService;

    @Autowired
    public Controller(Service fundservice)
    {
        this.FundService=fundservice;
    }

    @GetMapping("/getfunds")
    public List<Fund> gets()
    {
        return FundService.getFunds();
    }

    @PostMapping("/postfunds")
    public List<Fund> puts(@RequestBody List<Fund> FD)
    {
        return FundService.saveFunds(FD);
    }

}
