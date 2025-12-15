---
title: أول برنامج (Blink)
sidebar_position: 4
---

⏱️ الزمن المتوقع: 15 دقائق  
🎯 المستوى: مبتدئ  

---

## ما هو Blink؟
Blink هو أول برنامج شهير في عالم الأردوينو،
يقوم بتشغيل وإطفاء LED كل ثانية.

---

## الخطوات
1. افتح Arduino IDE
2. من القائمة:
   File → Examples → 01.Basics → Blink

---

## الكود
```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
