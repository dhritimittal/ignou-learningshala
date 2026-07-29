import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuIndicator,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from "@/components/unlumen-ui/motion-navigation-menu";

const listHighlightClassName = "bg-primary/25 rounded-lg";
const contentHighlightClassName =
  "bg-primary/25 rounded-lg";


export default function ProgrammeMegaMenu({programmes = [], university }) {

  const pgProgrammes =
    programmes.filter(p => p.level === "PG");

  const pgonline =
      pgProgrammes.filter(
          p => p.mode === "Online"
      );

  const pgdistance =
      pgProgrammes.filter(
          p => p.mode === "Distance"
      );

  const ugProgrammes =
      programmes.filter(p => p.level === "UG");

  const ugonline =
      ugProgrammes.filter(
          p => p.mode === "Online"
      );

  const ugdistance =
      ugProgrammes.filter(
          p => p.mode === "Distance"
      );

  const otherProgrammes =
      programmes.filter(
          p => !["PG", "UG"].includes(p.level)
      );

  return (
    <MotionNavigationMenu
      viewportClassName="bg-surface border-none shadow-none"
      springStiffness={350}
      springDamping={32}
    >
      <MotionNavigationMenuList highlightClassName={listHighlightClassName}>
        <MotionNavigationMenuItem value="pg">
          <MotionNavigationMenuTrigger>Post Graduation</MotionNavigationMenuTrigger>
          <MotionNavigationMenuContent
            className="bg-secondary rounded-lg"
            highlightClassName={contentHighlightClassName}
          >
            <div className="grid w-[400px] grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
              {/* Left Column */}
              <div className="space-y-1 h-full">
                {pgonline.length > 0 ? (
                  pgonline.map((programme) => (
                    <MotionNavigationMenuLink
                      key={programme.slug}
                      href={`/${university.slug}/${programme.slug}`}
                    >
                      <span className="text-sm font-medium">
                        {programme.name}
                      </span>

                      <span className="text-muted-foreground text-xs">
                        {programme.duration} • {programme.fee}
                      </span>
                    </MotionNavigationMenuLink>
                  ))
                ) : (
                  <div className="flex h-full min-h-[120px] items-center justify-center p-2">
                    <p className="w-full rounded-xl border border-dashed border-border/60 p-4 text-center text-xs text-muted-foreground">
                      No online programmes available.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-1 h-full">
                {pgdistance.length > 0 ? (
                  pgdistance.map((programme) => (
                    <MotionNavigationMenuLink
                      key={programme.slug}
                      href={`/${university.slug}/${programme.slug}`}
                    >
                      <span className="text-sm font-medium">
                        {programme.name}
                      </span>

                      <span className="text-muted-foreground text-xs">
                        {programme.duration} • {programme.fee}
                      </span>
                    </MotionNavigationMenuLink>
                  ))
                ) : (
                  <div className="flex h-full min-h-[120px] items-center justify-center p-2">
                    <p className="w-full rounded-xl border border-dashed border-border/60 p-4 text-center text-xs text-muted-foreground">
                      No distance programmes available.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </MotionNavigationMenuContent>
        </MotionNavigationMenuItem>

        <MotionNavigationMenuItem value="ug">
          <MotionNavigationMenuTrigger>Graduation</MotionNavigationMenuTrigger>
          <MotionNavigationMenuContent
            className="bg-secondary rounded-lg"
            highlightClassName={contentHighlightClassName}
          >
            <div className="grid w-[400px] grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
              {/* Left Column */}
              <div className="space-y-1 h-full">
                {ugonline.length > 0 ? (
                  ugonline.map((programme) => (
                    <MotionNavigationMenuLink
                      key={programme.slug}
                      href={`/${university.slug}/${programme.slug}`}
                    >
                      <span className="text-sm font-medium">
                        {programme.name}
                      </span>

                      <span className="text-muted-foreground text-xs">
                        {programme.duration} • {programme.fee}
                      </span>
                    </MotionNavigationMenuLink>
                  ))
                ) : (
                  <div className="flex h-full min-h-[120px] items-center justify-center p-2">
                    <p className="w-full rounded-xl border border-dashed border-border/60 p-4 text-center text-xs text-muted-foreground">
                      No online programmes available.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-1 h-full">
                {ugdistance.length > 0 ? (
                  ugdistance.map((programme) => (
                    <MotionNavigationMenuLink
                      key={programme.slug}
                      href={`/${university.slug}/${programme.slug}`}
                    >
                      <span className="text-sm font-medium">
                        {programme.name}
                      </span>

                      <span className="text-muted-foreground text-xs">
                        {programme.duration} • {programme.fee}
                      </span>
                    </MotionNavigationMenuLink>
                  ))
                ) : (
                  <div className="flex h-full min-h-[120px] items-center justify-center p-2">
                    <p className="w-full rounded-xl border border-dashed border-border/60 p-4 text-center text-xs text-muted-foreground">
                      No distance programmes available.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </MotionNavigationMenuContent>
        </MotionNavigationMenuItem>

        <MotionNavigationMenuItem value="others">
          <MotionNavigationMenuTrigger>Others</MotionNavigationMenuTrigger>
          <MotionNavigationMenuContent
            className="bg-secondary rounded-lg"
            highlightClassName={contentHighlightClassName}
          >
            <div className="grid w-[400px] grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto">              
                {otherProgrammes.length > 0 ? (
                  otherProgrammes.map((programme) => (
                    <MotionNavigationMenuLink
                      key={programme.slug}
                      href={`/${university.slug}/${programme.slug}`}
                    >
                      <span className="text-sm font-medium">
                        {programme.name}
                      </span>

                      <span className="text-muted-foreground text-xs">
                        {programme.duration} • {programme.fee}
                      </span>
                    </MotionNavigationMenuLink>
                  ))
                ) : (
                  <div className="flex h-full min-h-[80px] items-center justify-center p-2">
                    <p className="w-full rounded-xl border border-dashed border-border/60 p-4 text-center text-sm text-muted-foreground">
                      No other programmes available.
                    </p>
                  </div>
                )}
            </div>
          </MotionNavigationMenuContent>
        </MotionNavigationMenuItem>        
      </MotionNavigationMenuList>
    </MotionNavigationMenu>
  );
}