---
title:  "Framework laptop: first impressions"
date:   2022-06-01
---

<div style="background: cornsilk; padding: 4px 8px; line-height: 1.2; border: 1px solid;">
<small>
In this article, I get into details of why I chose this machine. Jump to <a href="#so-hows-the-framework">this section</a> if you're only interested in my review of the Framework itself.
</small>
</div>

Until now, my go-to work/fun laptop was _the_ 2015 Macbook Air. I've been through two of those, first an 11" one with 4GB RAM, then a 13" with 8GB RAM, both bought second-hand. The latter served as my work machine for the past year (I do frontend).

MBAs have by far been my favourite so far, and I've had my fair share of employer-issued Macbook Pros and Lenovo ThinkPads.

I loved my MBAs for various reasons:
- thin and lightweight
- good battery life
- quiet, and no overheating
- has USB ports![^1]
- keyboard much better than later-generation Airs and Pros.

But my beloved Air was getting old.

## Looking for a replacement

Admittedly, I'm no hardware geek, so I didn't shop around much: the choice came down to a Macbook, a ThinkPad, or the [Framework](https://frame.work).

I was basically looking for my favourite MBA qualities, with 16GB memory, 512GB SSD, around 13". The requirements matrix looked something like this[^2]:

<table>
<thead>
  <tr>
    <th></th>
    <th>Macbook Air</th>
    <th>Macbook Pro</th>
    <th>ThinkPad X1 Carbon</th>
    <th>Framework</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Weight</strong></td>
    <td>1.29 kg</td>
    <td>1.4 kg</td>
    <td>1.13 kg</td>
    <td>1.29 kg</td>
  </tr>
  <tr>
    <td><strong>Advertised battery life</strong></td>
    <td>15h</td>
    <td>17h</td>
    <td>16h</td>
    <td>"gets you through a workday"</td>
  </tr>
  <tr>
    <td><strong>Ports</strong></td>
    <td>2x USB-C</td>
    <td>2x USB-C</td>
    <td>2x USB, HDMI</td>
    <td>4x anything you want</td>
  </tr>
  <tr>
    <td><strong>Keyboard</strong></td>
    <td>not good</td>
    <td>not good</td>
    <td>good</td>
    <td>good</td>
  </tr>
  <tr>
    <td><strong>Price</strong></td>
    <td>£1,249</td>
    <td>£1,699</td>
    <td>£1,862</td>
    <td>£1,376</td>
  </tr>
</tbody>
</table>

Based on this comparison, I was leaning towards the _Lenovo X1 Carbon_ but very interested in the _Framework_. I knew I could trust a ThinkPad, the weight and battery life are both amazing, but the price difference was significant at a similar configuration, plus I fell in love with the right-to-repair approach[^3].

## So, how's the Framework?

![](/img/fw.webp)  
<small style="display: block; text-align: center">Image from Framework website</small>

First off, it gets noticed by people who follow this kind of stuff (cool gadgets, I mean). Decide for yourself if this is good or bad :)

But also, it's a reliable laptop with a fairly comfy keyboard, acceptable (if not great) battery life[^4], good performance, with lots of upgrade options.

### What I love about it

- Expansion cards.[^5] Plainly, you choose what ports you need. There are four slots where you can insert them, but you can also collect them all and swap on the go.
- Hinge opens 180 degrees. Gone are the times of being afraid I'll over-stretch my Macbook and break it.
- Privacy. There are two tiny physical switches at the top of the screen that turn the microphone and camera on and off.
- There is a [DIY version](https://frame.work/laptop-diy-edition). I got a pre-built, but tell me if this isn't insanely cool.
- [Open-source](https://github.com/FrameworkComputer) firmware, design files for expansion cards etc. This is the stuff I'm not likely to ever use, but you go Framework! 🍭

### What could be better

- Battery life. I get around 4-5 hours out of with with a single charge, which is good for half a day, but not a full workday unfortunately.
- Fan can go loud when workload is high. The _'person sitting next to you will definitely notice it or think it's raining heavily'_-loud. Especially when gaming.
- Weight and bulk. Nothing you can't throw in your backpack and go, but it _is_ noticeably thicker and heavier than an X1 Carbon or a Macbook Air.

### How about Windows?

I'm ok with it. I live 95% of my screen life in the browser or the command line, and those are fairly OS-independent, thank the computer gods for [WSL](https://docs.microsoft.com/en-us/windows/wsl/).

At first, the keyboard hotkeys drove me crazy, but I'm running an [Autohotkey](https://www.autohotkey.com/) script that remaps keys so they behave like a mac, more or less. You can find various mac-like mappings on GitHub, or write your own.

## Conclusion?

I'm happy with my choice.

As always, please let me know if I've made a mistake or you have any suggestions.  
Keep healthy, drink water, [eat plants](https://samu.space/etc/vegan/).

[^1]: I need at least two of them at all times, because I use an external keyboard and mouse. With MBPs, I always had to choose between charging and accessories, or use an external hub.  
[^2]: Prices are show for my preferred configuration. As for ports, I've only listed the ones I care about. Keyboard is purely compared based on my personal preference.  
[^3]: Framework have a [Marketplace](https://frame.work/gb/en/marketplace) where you can get replacements for everything, and I do mean everything inside the laptop. Broken display hinges? You can buy them and replace them yourself (following their detailed repair guides) with the tool that comes in the box.  
[^4]: Sadly, it does _not_ get me through a workday, but I only have to plug it in once. I'm still working on optimising battery life on Windows.  
[^5]: At the time of writing: USB-C, USB-A, HDMI, DisplayPort, MicroSD, storage (up to 1TB per card), Ethernet. But it's all open source, so future possibilities are endless!  
