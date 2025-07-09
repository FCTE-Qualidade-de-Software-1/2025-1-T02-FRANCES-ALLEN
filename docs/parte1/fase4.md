# Fase 4 -  Executar a avaliação

Essa avaliação será divida da seguinte forma:

- Avaliado cada métrica de forma unitária de acordo com os critérios
- Depois será avaliado cada questão do GQM
- Por fim, será avaliado o Objetivo da avaliação


!!! info
    Dê zoom com o scroll do mouse no diagrama para ver melhor. Caso prefira, abra em tela cheia.<br/>
    Você também mode mover o diagrama com o mouse.

``` mermaid
graph TD
  BussinessObjective[Objetivo de Negócio: Melhorar Manutenibilidade do AGROMART] --> Objective1[Objetivo de Medição 1: Avaliar Qualidade do Código];

  Objective1 --> Question1[Q1: Modularidade?]
    Question1 --> AvgQtdRowsByFile[M1: Linhas por arquivo]
    Question1 --> QtdRowsByFunction[M2: Linhas por função]
    Question1 --> Density[M7: Linhas duplicadas]
    Question1 --> DuplCode[M8: Blocos de código duplicados]
    Question1 --> DuplFiles[M9: Arquivos duplicados]
    Question1 --> Complexity[M3: Complexidade Ciclomática por função]
  
  Objective1 --> Question2[Q2: Legibilidade?]
    Question2 --> Complexity
    Question2 --> documentedModules[M4: Porcentagem de módulos documentados]
    Question2 --> CognitiveC[M10: Complexidade cognitiva]
  
  Objective1 --> Question3[Q3: Testabilidade?]
    Question3 --> Metric5[M5: Cobertura de testes]
    Question3 --> Metric6[M6: Tempo médio de execução dos testes por arquivo]
```

As métricas foram obtidas da seguinte forma:

- Linhas por arquivo: ESLint
- Linhas por função: ESLint
- Complexidade Ciclomática por função: ESLint e Sonar
- Porcentagem de módulos documentados: Analisamos cada endpoint com a documentação
- Cobertura de testes: Jest
- Tempo médio de execução dos testes por arquivo: Jest
- Porcentagem de linhas de código duplicadas no projeto: Sonar
- Blocos de código duplicados: Sonar
- Arquivos duplicados: Sonar
- Complexidade cognitiva: Sonar

# Comparação com critérios

### Linhas por arquivo:
Todos os arquivos estavam no estado **✅ Bom**

Com essa métrica percebemos que as regras negócios provavelmente estão bem separadas pois não existem arquivos muito grandes, que dificultassem a refatoração.

Essa métrica foi importante para entendermos que o projeto tem uma boa separação pelas regras de negócio.

Talvez essa métrica não seja a melhor para isso, mas pode indicar pontos críticos de baixa coesão do produto.

### Linhas por função:
Das 97 funções não vazias, temos:<br/>
**✅ Bom:** 79<br/>
**⚠️ Aceitável:** 13<br/>
**❌ Crítico:** 5

Com isso, é possível reforçar que o projeto tem uma boa modularidade, separando o projeto em pequenos blocos de código que juntos irão fazer sentido.

Apesar de o projeto estar bem modularizado, essa métrica mostra que no geral o produto tem uma boa coesão e que por estar modularizado, é mais fácil testar pequenos módulos.

Porém, ainda existem pontos críticos a serem resolvidos, e funções que podem ser melhoradas.


### Complexidade Ciclomática por função:
Das 97 funções não vazias, temos:<br/>
**✅ Bom:** 87<br/>
**⚠️ Aceitável:** 4<br/>
**❌ Crítico:** 6

Essa métrica foi MUITO importante pois mostrou a facilidade de entender e testar cada módulo. Pois quando se tem uma complexidade ciclomática maior, é necessário testar vários e vários casos que dificulta a testabilidade também.

### Porcentagem de módulos documentados:
Todos os endpoints tem seus casos de usos documentados. Então o critério está **✅ Bom**.

### Cobertura de testes:
88.88% das linhas estão cobertas por testes automatizados, fazendo com que esteja no nível<br/> **✅ Bom**.

### Porcentagem de linhas de código duplicadas no projeto:
7,6% de todas as linhas de código do projeto são duplicadas o que indica que este critério é<br/> **❌ Crítico**.

### Blocos de código duplicados:
O número de blocos de código repetidos que foi encontrado no projeto é 19, o que indica que este critério esta<br/> **❌ Crítico**.

### Arquivos duplicados:
O número de arquivos em que foram encontradas duplicações dentro do projeto é 10, o que indica que este critério esta<br/> **❌ Crítico**.

### Complexidade cognitiva:
O valor da complexidade cognitiva é 185, esta é uma medida de quanto esforço mental é necessário para entender o fluxo de controle do código. Este critério está em uma situação<br/> **❌ Crítico**.

# **👨‍⚖️ Julgamento**

### Q1: Modularidade

A partir das métricas, o grupo concluiu que apesar de existir poucas linhas por função na maioria das funções, o projeto se encontra atualmente com várias repetições de códigos e blocos de código duplicados, tendendo a um provável baixa modularidade.

Além disso, a complexidade cognitiva do código fonte é considerada muito alta para a quantidade de linhas do projeto. Sendo um ponto extremamente crítico.

As métricas de quantidade de linhas, portanto, não foram muito eficazes para essa análise. Mas as métricas de complexidade e duplicação de código demostraram facilmente em o que deveríamos focar.

❌ Não está modular

### Q2: Legibilidade

Entendemos que por mais que a complexidade estivesse alta, o projeto estava muito bem documentado. Todos os módulos tem seus casos de uso com diagramas e possuem os critérios de aceitação bem definidos. Portanto, o projeto é facilmente legível com a documentação, porém ao melhorar a complexidade, o projeto seria muito mais fácil de entender para novos integrantes.

⚠️ A legibilidade está aceitável

### Q3: Testabilidade?

As métricas mostram uma cobertura de código muito boa, que mostra que o projeto está bem testável e que é fácil testar novos módulos. Além de que os testes são rápidos, demorando cerca de 200ms para cada arquivo, fazendo com que seja viável testar várias vezes o projeto ao longo de sua evolução. O grupo concluiu que o projeto tem ótima testabilidade.

✅ A testabilidade está boa

## Melhorias Propostas:

### 1.1 Redução de complexidade da função isDefaultRoute no arquivo `src/middlewares/helpers/defaultRoutes.js`

Antes com complexidade **16**:
```js
function isDefaultRoute(url) {
  if (!url.startsWith('/admin')
        && !url.startsWith('/i18n')
        && !url.startsWith('/content')
        && !url.startsWith('/upload')
        && !url.startsWith('/expo-notifications')
        && !url.startsWith('/plugins')
        && !url.startsWith('/pagamento')
        && !url.startsWith('/users-permissions')
        && !url.startsWith('/auth/google')
        && !url.startsWith('/auth/facebook')
        && !url.startsWith('/auth/github')
        && !url.startsWith('/email')
        && !url.startsWith('/_health')        
        && url != '/'
        && url != '' ){
    return false;
  } else{
    return true;
  }
}
```

Para complexidade **3**:
```js
const defaultRoutePrefixes = [
  '/admin',
  '/i18n',
  '/content',
  '/upload',
  '/expo-notifications',
  '/plugins',
  '/pagamento',
  '/users-permissions',
  '/auth/google',
  '/auth/facebook',
  '/auth/github',
  '/email',
  '/_health',
];

function isDefaultRoute(url) {
  return defaultRoutePrefixes.some((prefix) => url.startsWith(prefix))
    || url === '/' 
    || url === '';
}
```

### 1.2 Redução de complexidade da função subistituirValores no arquivo `src/plugins/pagamento/server/utils/gateways/padrao.js`

Antes, com complexido **11** e **53** linhas:
```js
function substituirValores(inputJSON, dado) {
  let outputJSON = {};
  // entra em um loop para cada chave do json
  for (const key in inputJSON) {
    if (inputJSON.hasOwnProperty(key)) {
      const value = inputJSON[key];
      if (typeof value === 'string') {
        if (extractValue(value)) {
          // valor dentro de um extract value
          if (value === '${valorTotal}') {
            outputJSON[key] = getTotal(dado.extrato);
          } else if (value === '${dataHoje}') {
            outputJSON[key] = getDueDate();
          } else {
            outputJSON[key] = getValueFromObjectByPath(
              extractValue(value),
              dado
            );
          }
        } else {
          // valor fixo
          outputJSON[key] = value;
        }
      } else if (
        (typeof value === 'number' && Number.isFinite(value)) ||
        typeof value === 'boolean'
      ) {
        outputJSON[key] = value;
      } else if (Array.isArray(value)) {
        outputJSON[key] = [];
        // se for um array vai ser um array de items
        dado.extrato.itens.forEach((item, index) => {
          let newItem = {};
          for (const kv in value[0]) {
            const valueWithIndex = value[0][kv].replace(/index/g, index);
            newItem[kv] = getValueFromObjectByPath(
              extractValue(valueWithIndex),
              dado
            );
            if (newItem[kv] == null) {
              newItem[kv] = index;
            }
          }
          outputJSON[key].push(newItem);
        });
      } else {
        // se não for nem string nem array vai chamar de novo
        outputJSON[key] = substituirValores(value, dado);
      }
    }
  }
  return outputJSON;
}
```

Agora com complexidade **3** utilizando Strategy:
```js
const subistituirValoresStrategy = {
  'string': ({value, outputJSON, key, dado}) => {
    if (extractValue(value)) {
      // valor dentro de um extract value
      if (value === '${valorTotal}') {
        outputJSON[key] = getTotal(dado.extrato);
      } else if (value === '${dataHoje}') {
        outputJSON[key] = getDueDate();
      } else {
        outputJSON[key] = getValueFromObjectByPath(
          extractValue(value),
          dado
        );
      }
    } else {
      // valor fixo
      outputJSON[key] = value;
    }
  },
  'number': ({value, outputJSON, key}) => {
    if(Number.isFinite(value)) {
      outputJSON[key] = value;
    }
  },
  'boolean': ({value, outputJSON, key}) => {
    outputJSON[key] = value;
  },
  'object': ({value, outputJSON, key, dado}) => {
    if (Array.isArray(value)) {
      outputJSON[key] = [];
      // se for um array vai ser um array de items
      dado.extrato.itens.forEach((item, index) => {
        let newItem = {};
        for (const kv in value[0]) {
          const valueWithIndex = value[0][kv].replace(/index/g, index);
          newItem[kv] = getValueFromObjectByPath(
            extractValue(valueWithIndex),
            dado
          );
          if (newItem[kv] === null) {
            newItem[kv] = index;
          }
        }
        outputJSON[key].push(newItem);
      });
    } else {
      // se não for nem string nem array vai chamar de novo
      outputJSON[key] = substituirValores(value, dado);
    }
  },
};

function substituirValores(inputJSON, dado) {
  let outputJSON = {};
  // entra em um loop para cada chave do json
  for (const key in inputJSON) {
    if (inputJSON.hasOwnProperty(key)) {
      const value = inputJSON[key];
      const strategy = typeof value;
      subistituirValoresStrategy[strategy]?.({value, outputJSON, key, dado});
    }
  }
  return outputJSON;
}
```

### 1.3 Redução de complexidade da função parseJSONRecursively no arquivo `src/plugins/pagamento/server/utils/gateways/padrao.js`

Antes, com complexidade **5**:
```js
function parseJSONRecursively(jsonString) {
    const jsonObject = JSON.parse(jsonString);
    const parseNestedJSON = (obj) => {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                try {
                    obj[key] = parseJSONRecursively(obj[key]);
                } catch (error) {
                    // Ignorar a string que não é um JSON válido
                }
            } else if (typeof obj[key] === 'object') {
                parseNestedJSON(obj[key]);
            }
        }
    }
    parseNestedJSON(jsonObject);
    return jsonObject;
}
```

Para complexidade **2** com uso de Strategy:
```js
const jsonParserStrategy = {
  'string': (obj, key) => {
    try {
      obj[key] = parseJSONRecursively(obj[key]);
    } catch {
      // Ignorar a string que não é um JSON válido
    }
  },
  'object': (obj, key) => {
    parseNestedJSON(obj[key]);
  }
};
function parseNestedJSON(obj) {
  Object.keys(obj).forEach((key) => {
    const strategy = typeof obj[key];
    jsonParserStrategy[strategy]?.(obj, key);
  });
}
function parseJSONRecursively(jsonString) {
  const jsonObject = JSON.parse(jsonString);
  parseNestedJSON(jsonObject);
  return jsonObject;
}
```

### 1.4 Redução de complexidade da função getValueFromObjectByPath no arquivo `src/plugins/pagamento/server/utils/gateways/padrao.js`

Antes, com complexidade **4**:
```js
function getValueFromObjectByPath(path, obj) {
  const paths = path.split('||');
  let value = obj;
  let find = false;
  for (const p of paths) {
    const keys = p.split('.');
    let value = obj;

    if (find == false) {
      for (const key of keys) {
        // Verifica se a chave contém um índice
        if (/\d+/.test(key)) {
          const index = parseInt(key, 10);
          value = Array.isArray(value) ? value[index] : undefined;
        } else {
          value = value[key];
        }

        if (value === undefined) {
          break;
        }
      }
    }

    if (value === undefined) {
      find = false;
    } else {
      return value;
    }
  }
}
```

Para complexidade **2**:
```js
function getValueFromObjectByPath(path, obj) {
  const paths = path.split('||');
  let value = undefined;
  
  paths.some((path) => {
    return path.split('.').reduce((acc, key) => {
      if (/\d+/.test(key)) {
        const index = parseInt(key, 10);
        value = Array.isArray(acc) ? acc[index] : undefined;
        return value;
      }

      value = acc[key];
      return value;
    }, obj);
  });

  return value;
}
```


### 1.5 A configuração do ESLint foi consertada e foram adicionadas regras para impedir que a complexidade do projeto suba de forma descontrolada. Essas regras reforçam o controle das métricas antes mesmo desse código subir ao repositório, pois será indicado em tempo de desenvolvimento.

Foram adicionadas as seguintes regras:

- complexity: 3
- max-depth: 3
- max-lines: 200
- max-lines-per-function: 30
- max-params: 2

Também foi adicionado o plugin do sonar, para que apontamentos do sonar e indicações sejam identificadas o quanto antes possível.
