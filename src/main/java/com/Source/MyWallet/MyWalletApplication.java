package com.Source.MyWallet;

import com.Source.MyWallet.Investments.Fund;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableCaching
public class MyWalletApplication {

	public static void main(String[] args) {

		SpringApplication.run(MyWalletApplication.class, args);
	}

}
