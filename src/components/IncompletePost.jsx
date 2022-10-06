import { Callout } from 'nextra-theme-docs'


export const IncompleteCallout = () => (
  <Callout emoji="⚠️">
    This series is currently incomplete. The first few chapters are available, but the rest are still being written. We expected to be finished by January 2023.
  </Callout>
);

const IncompletePost = ({ availableDate }) => (
  <>
    <IncompleteCallout />
    &nbsp;
    <p>
      This tutorial will be available {availableDate}.
    </p>
  </>
);

export default IncompletePost;