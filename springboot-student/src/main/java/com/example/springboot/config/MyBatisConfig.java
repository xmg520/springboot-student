package com.example.springboot.config;

import org.apache.ibatis.session.Configuration;
import org.mybatis.spring.boot.autoconfigure.ConfigurationCustomizer;

/**
 * @author Yan
 * @date 2019/6/8 18:18
 *
 * 启用驼峰命令法
 */

@org.springframework.context.annotation.Configuration
public class MyBatisConfig {


    public ConfigurationCustomizer configurationCustomizer(){
        return new ConfigurationCustomizer() {
            @Override
            public void customize(Configuration configuration) {
                configuration.setMapUnderscoreToCamelCase(true);
            }
        };
    }
}
