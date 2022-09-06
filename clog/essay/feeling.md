# wuwuwu
xixixi!
## aaaa

```java
//String => 对应的基本数据类型
//使用基本数据类型对应的包装类的相应方法，得到基本数据类型
String s5 = "123";
int num1 = Integer.parseInt(s5);
double num2 = Double.paresDouble(s5);
float num3 = Float.paresFloat(s5);
long num4 = Long.parseLong(s5);
byte num5 = Byte.parseByte(s5);
boolean b = Boolean.parseBoolean("true");
short num6 = Short.parseShort(s5);

//字符串转成字符（char类型）：得到字符串类型数据中的第一个字符
//取出s5字符串中的第一位，得到字符‘1’，而不是数字1
System.out.println(s5.charAt(0))
```