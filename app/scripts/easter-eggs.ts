export function initEasterEggs() {
  const easterEgg = `
%c�� Hey OpenAI Team!

%cLooks like you're diving into the code - I love that! 
While you're here, check out these hidden gems:
- There's a secret keyboard shortcut: Press "O" + "A" + "I"
- Try typing "join()" in the console
- Check out the README.md for more surprises

P.S. I'd love to chat about how I built this! 
     Connect with me: https://linkedin.com/in/marvin-aziz/

`

  console.log(
    easterEgg,
    'font-size: 20px; font-weight: bold; color: #10a37f;',
    'font-size: 14px; color: #666;'
  )

  // @ts-expect-error - this is a easter egg
  globalThis.join = function () {
    console.log('%c🤖 Ready to help shape the future of AI!', 'font-size: 20px; color: #10a37f;')
    console.log(
      '%cCheck out my first SaaS built with AI: https://www.webtotheflow.com/blog/my-journey-of-building-videobrainstorm-the-highs-lows-and-lessons-learned',
      'color: #666;'
    )
  }
}
