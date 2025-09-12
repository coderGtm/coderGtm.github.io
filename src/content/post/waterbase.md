---
title: The Easiest Database you could ever need!
description: As a developer, you might have heard of FireBase. But do you know about.....WaterBase ??
dateFormatted: Aug 2, 2022
---
### As a developer, you might have heard of FireBase. But do you know about.....WaterBase ??

I've always admired Android in the way of storing persistent data. If you are famaliar with Android Development, you'd know about Shared Preferences. If that's new to you, it is basically a storage utility that Android provides using which you can store data in Key-value form. Shared Preferences are suitable in different situations. For example, when the user’s settings need to be saved or to store data that can be used in different activities within the app.

But...we don't get that awesome feature outside the Android environment. Do we? So I decided to create a lightweight storage utility that provides such behavior and can be used on any platform. And voila...[WaterBase](https://github.com/coderGtm/WaterBase) was born ;)

![WaterBase](https://codergtm.github.io/assets/images/WaterBase.jpeg)

#### So first thing's first. Why the name ?

Ok...so here's my explanation. As we all know that 🔥FireBase is a database that is in cloud and can be accessed from anywhere. And so WaterBase is a database on your hard disk that can be accessed from anywhere...just like water🌊...simple and lightweight🪶.

![cool](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ29rbG9iYWF3azdkZTYzZTlod3F1Y2JkZzhiY3JqbnJvZWZjZ3dpdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14xwAVBIYjCNhu/giphy.gif)

#### How it's used ?

As promised, in the easisest way...WaterBase is currently available in C++ and Python

> Talk is cheap. Show me the code.

Ok then...here's the Python version

```python
from waterbase import WaterBase

# Create / open a database file (creates one if it doesn't exist)
db = WaterBase("myDatabase")

# Save values (Bool / Int / String supported)
db.SaveBool("is_active", True)
db.SaveInt("score", 42)
db.SaveString("username", "gautam")

# Load them back (second arg is default value if key missing)
active = db.LoadBool("is_active", False)
score = db.LoadInt("score", 0)
username = db.LoadString("username", "guest")

print(active, score, username)
```

And if you rather prefer C++, you're covered:

```cpp
#include "WaterBase.hpp"
#include <iostream>

int main() {
    WaterBase db("myDatabase");

    db.SaveBool("is_active", true);
    db.SaveInt("score", 42);
    db.SaveString("username", "gautam");

    bool active = db.LoadBool("is_active", false);
    int score = db.LoadInt("score", 0);
    std::string user = db.LoadString("username", "guest");

    std::cout << active << " " << score << " " << user << std::endl;
    return 0;
}
```

#### Explanation:

First we create an instance of the class WaterBase. We provide the name of the WaterBase database to use as parameter. If no database exists by that name, a new one is created.

Now let's put some values in our database. WaterBase supports three types of values: Boolean, Integer and String. To save values, use the `db.Save*(key, value)` function.

Now if you want to retreive these values, use `db.Load*(key, default_value)` function.

That's all...This is the simplest databse you could ever need. You can find the GitHub repository [here.](https://github.com/coderGtm/WaterBase)

And one last thing...if you've read till here and are still unsure whether should you use WaterBase or not in a project, then please, please, please drop a comment on the repository's [issue page](https://github.com/coderGtm/WaterBase/issues), describing why you don't wanna use it. It can help the community to make WaterBase a better product, more suited for you.

![goodbye](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFlOWh0bmlvNW1oNXUzNnJjYTM1emJmM28wYTNidHR0cXZ3M2VlMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zDpYQooxkwXkAWMxRK/giphy.gif)

Goodbye!!

[Gautam Mehta](https://codergtm.github.io/index.html) [@coderGtm](https://github.com/coderGtm)
