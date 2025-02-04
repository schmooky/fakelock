import NoSleep from '@zakj/no-sleep';
const noSleep = new NoSleep();

document.addEventListener(
    'click',
    function enableNoSleep() {
      document.removeEventListener('click', enableNoSleep, false);
      noSleep.enable();
      document.getElementById('fake-lock-status')!.style.visibility = 'unset';
    },
    false,
  );