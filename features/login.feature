Feature: Login no SauceDemo
    Realizar o login no www.saucedemo.com
    Scenario Outline: Login com sucesso
        Given que estou na pagina de login
        When preencho o '<usuario>' e a '<senha>'
        And clico em Login
        Then vou para a pagina '<url>' e vejo '<titulo_secao>'
    Examples:
        | usuario | senha | url | titulo_secao |
        | standard_user | secret_sauce | inventory | Product |
        | visual_user | secret_sauce | inventory | Product |
        #| usuario3 | senha | inventory | Product |

    # Scenario: Login com sucesso
    #     Given que estou na pagina de login
    #     When preencho usuario "standard_user" e a senha "secret_sauce"
    #     And clico em Login #não tem necessidade de fazer separado
    #     Then vou para a pagina Inventory



