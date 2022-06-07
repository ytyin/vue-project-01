<template>
  <div><br /><br /><br /> 开发者工具的Network去查看国家列表的axios请求</div>
</template>
<script>
import  axios from 'axios'
export default {
  data() {
    return {
      currentArecode: ""
    };
  },
  mounted() {
    this.getCountryInfo();
    this.getCountryInfoAutoMap();
  },
  methods: {
    getCountryInfoAutoMap() {
      var self = this, http = axios
      console.log(111111, axios)
      /**
       * 获取国家列表filter:
       * 是否过滤；0-不过滤，其他-过滤
       * needCur: 是否根据IP获取当前国家；1-获取，否则-不获取
       */
      http && http
        .get("https://mkt-api.lingoace.com/campaign/common/country/con/list/1/1")
        .then(function(result) {
          if (
            result &&
            result.data &&
            result.data.code === 200 &&
            result.data.data &&
            result.data.data.currentCountry
          ) {
            self.x = result.data.data.currentCountry.tel;
            self.setInitAreCode(result.data.data.currentCountry.tel, result.data.data.currentCountry.nameZh)
          } else {
            var defaultAreaCode = '+1'
            var defaultCountry = '美国'
            window.sessionStorage.setItem('cule_phone_areacode', '+1')
            self.setInitAreCode(defaultAreaCode, defaultCountry)
          }
        });
    },
    getCountryInfo() {
      var self = this, http = axios
      console.log(123, axios)
      http && http
        .get("https://mkt-api.lingoace.com/campaign/common/country/all/list")
        .then(function(result) {
          if (
            result &&
            result.data &&
            result.data.code === 200 &&
            result.data.data &&
            result.data.data.currentCountry
          ) {
            self.x = result.data.data.currentCountry.tel;
            self.setInitAreCode(result.data.data.currentCountry.tel, result.data.data.currentCountry.nameZh)
          } else {
            var defaultAreaCode = '+1'
            var defaultCountry = '美国'
            window.sessionStorage.setItem('cule_phone_areacode', '+1')
            self.setInitAreCode(defaultAreaCode, defaultCountry)
          }
        });
    },
    setInitAreCode(code, countryName) {
      // 设置隐藏域<国家码、国家名称>
      document.getElementsByName('lingoaceCountry')[0].value = countryName
      document.getElementsByName('lingoaceAreaCode')[0].value = code

      var areParentNode = document.querySelector('.countrycode'),
          areaCodeNode = this.getFirstElementChild(areParentNode)
      if (areaCodeNode) areaCodeNode.innerText = code
      window.sessionStorage.setItem('cule_phone_areacode', code)
      // 隐藏+86
      areParentNode.onclick = function () {
        var hideChainAreaCode = function () {
          var nodes = document.querySelectorAll('div.countrycode-digits')
          for (var index = 0; index < nodes.length; index++) {
            if(nodes[index].innerText === '+86') {
               window.sessionStorage.setItem('cule_phone_areacode', '+86')
              var parentNode = nodes[index].parentElement
              parentNode.style.display = 'none'
              parentNode.nextElementSibling.style.display = 'none'
            }
          }
        }
        hideChainAreaCode()
        // 获取search-input
        var searchInputNode = document.querySelector('input.countrycode-search')
        searchInputNode.oninput = function() {
          hideChainAreaCode()
        }
      }
    },
    getFirstElementChild(element){
      var node, nodes = element.childNodes, i = 0
      while ( node == nodes[i++] ) {
        if (node.nodeType === 1) return node
      }
      return null
    }
  }
};
</script>
